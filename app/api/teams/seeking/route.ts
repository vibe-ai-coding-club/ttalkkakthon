import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.memberId) {
    return NextResponse.json(
      { success: false, message: "인증이 필요합니다." },
      { status: 401 },
    );
  }

  const { seekingTeam } = await req.json();
  if (typeof seekingTeam !== "boolean") {
    return NextResponse.json(
      { success: false, message: "잘못된 요청입니다." },
      { status: 400 },
    );
  }

  await prisma.member.update({
    where: { id: session.user.memberId },
    data: { seekingTeam },
  });

  return NextResponse.json({ success: true });
}
