import { NextRequest, NextResponse } from "next/server";
import { getAuthFromRequest } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const auth = await getAuthFromRequest(req);
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await prisma.user.findUnique({
      where: { id: auth.userId },
      select: {
        id: true, email: true, name: true, bio: true, createdAt: true,
        projects: {
          orderBy: { createdAt: "desc" },
          select: { id: true, title: true, raised: true, goal: true, category: true, backerCount: true },
        },
        donations: {
          orderBy: { createdAt: "desc" },
          take: 5,
          include: { project: { select: { id: true, title: true } } },
        },
        _count: { select: { projects: true, donations: true } },
      },
    });

    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const totalRaised = user.projects.reduce((sum, p) => sum + p.raised, 0);
    const totalDonated = user.donations.reduce((sum, d) => sum + d.amount, 0);

    return NextResponse.json({ user: { ...user, totalRaised, totalDonated } });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const auth = await getAuthFromRequest(req);
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { name, bio } = await req.json();
    const user = await prisma.user.update({
      where: { id: auth.userId },
      data: { ...(name && { name }), ...(bio !== undefined && { bio }) },
      select: { id: true, email: true, name: true, bio: true },
    });

    return NextResponse.json({ user });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
