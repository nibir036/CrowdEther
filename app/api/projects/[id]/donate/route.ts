import { NextRequest, NextResponse } from "next/server";
import { getAuthFromRequest } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const auth = await getAuthFromRequest(req);
    if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { amount } = await req.json();
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      return NextResponse.json({ error: "Enter a valid donation amount" }, { status: 400 });
    }

    const project = await prisma.project.findUnique({ where: { id: params.id } });
    if (!project) return NextResponse.json({ error: "Project not found" }, { status: 404 });

    const donationAmount = Number(amount);

    // Create donation record and update project atomically
    const [donation, updatedProject] = await prisma.$transaction([
      prisma.donation.create({
        data: { amount: donationAmount, userId: auth.userId, projectId: params.id },
      }),
      prisma.project.update({
        where: { id: params.id },
        data: {
          raised: { increment: donationAmount },
          backerCount: { increment: 1 },
        },
      }),
    ]);

    return NextResponse.json({ donation, project: updatedProject });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
