import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json(
      { success: false, message: "인증이 필요합니다." },
      { status: 401 },
    );
  }

  const teamId = session.user.teamId;
  if (!teamId) {
    return NextResponse.json(
      { success: false, message: "팀 정보가 없습니다." },
      { status: 400 },
    );
  }

  const body = await req.json();
  const { title, description, githubUrl, demoUrl, linkUrl } = body;

  if (!title?.trim()) {
    return NextResponse.json(
      { success: false, message: "프로젝트명을 입력해주세요." },
      { status: 400 },
    );
  }

  // 기존 프로젝트가 있으면 업데이트, 없으면 생성
  const existing = await prisma.project.findFirst({ where: { teamId } });

  if (existing) {
    await prisma.project.update({
      where: { id: existing.id },
      data: {
        title: title.trim(),
        description: description?.trim() || "",
        githubUrl: githubUrl?.trim() || "",
        demoUrl: demoUrl?.trim() || null,
        linkUrl: linkUrl?.trim() || null,
      },
    });
  } else {
    await prisma.project.create({
      data: {
        teamId,
        title: title.trim(),
        description: description?.trim() || "",
        githubUrl: githubUrl?.trim() || "",
        demoUrl: demoUrl?.trim() || null,
        linkUrl: linkUrl?.trim() || null,
      },
    });
  }

  return NextResponse.json({ success: true });
}
