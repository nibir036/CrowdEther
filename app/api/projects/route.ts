import { NextRequest, NextResponse } from "next/server";
import { getAuthFromRequest } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const sort = searchParams.get("sort") || "newest";

    const where: Record<string, unknown> = {};
    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { brief: { contains: search, mode: "insensitive" } },
        { tags: { has: search } },
      ];
    }
    if (category && category !== "All") {
      where.category = category;
    }

    const orderBy =
      sort === "newest"
        ? { createdAt: "desc" as const }
        : sort === "most-funded"
        ? { raised: "desc" as const }
        : sort === "ending-soon"
        ? { deadline: "asc" as const }
        : { backerCount: "desc" as const };

    const projects = await prisma.project.findMany({
      where,
      orderBy,
      include: { user: { select: { name: true, email: true } } },
    });

    return NextResponse.json({ projects });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const auth = await getAuthFromRequest(req);
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { title, brief, detail, goal, category, tags, deadline, imageUrl } =
      await req.json();

    if (!title || !brief || !detail || !goal || !category || !deadline) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const project = await prisma.project.create({
      data: {
        title,
        brief,
        detail,
        goal: Number(goal),
        category,
        tags: tags || [],
        deadline: new Date(deadline),
        imageUrl: imageUrl || null,
        userId: auth.userId,
      },
    });

    return NextResponse.json({ project }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
