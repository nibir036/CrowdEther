const express = require('express');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(express.json());
app.use(cors());

// Secret key for JWT
const JWT_SECRET = '6465267133'; // Replace with a secure key in production

// Middleware to authenticate user using JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token
  if (!token) return res.status(401).json({ error: 'Access denied' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(400).json({ error: 'Invalid token' });
    req.user = user; // Store user info from the token
    next();
  });
};

// Signup route
app.post('/api/signup', async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  try {
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Create Project (Authenticated Route)
app.post('/api/projects', authenticateToken, async (req, res) => {
  const { title, brief, detail, goal, raised } = req.body;

  try {
    const newProject = await prisma.project.create({
      data: {
        title,
        brief,
        detail,
        goal,
        raised,
        userId: req.user.userId, // Use the authenticated user's ID from JWT
      },
    });

    return res.status(201).json({ message: 'Project created successfully', project: newProject });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Fetch all projects (Public route)
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      include: { user: true }, // Include the user who created the project
    });

    return res.status(200).json({ projects });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Fetch projects created by a specific user (Authenticated route)
app.get('/api/user-projects', authenticateToken, async (req, res) => {
  try {
    const userProjects = await prisma.project.findMany({
      where: { userId: req.user.userId }, // Fetch only the projects of the authenticated user
    });

    return res.status(200).json({ projects: userProjects });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Update project raised amount (Authenticated Route)
app.patch('/api/projects/:id/donate', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;

  try {
    // Find the project
    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Update the raised amount
    const updatedProject = await prisma.project.update({
      where: { id },
      data: {
        raised: project.raised + amount, // Update the raised amount
      },
    });

    return res.status(200).json(updatedProject);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete("/api/projects/:id", authenticateToken, async (req, res) => {
  const projectId = req.params.id;
  
  try {
    // Find the project by ID
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Check if the user has permission to delete
    if (project.userId !== req.user.userId) {
      return res.status(403).json({ message: "Forbidden" });
    }

    // Delete the project
    await prisma.project.delete({
      where: { id: projectId },
    });

    res.status(204).send(); // Successfully deleted
  } catch (error) {
    console.error("Error deleting project:", error); // Log the error
    res.status(500).json({ message: "Failed to delete project", error: error.message });
  }
});

