import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ success: false, message: "인증이 필요합니다." }, { status: 401 });
  }

  const myTeamId = session.user.teamId ?? null;

  // 모집중인 팀 + 내 팀 (모집중이 아니더라도)
  const teams = await prisma.team.findMany({
    where: {
      OR: [
        { recruitmentStatus: "RECRUITING" },
        ...(myTeamId ? [{ id: myTeamId }] : []),
      ],
    },
    select: {
      id: true,
      name: true,
      teamName: true,
      recruitmentNote: true,
      recruitmentStatus: true,
      experienceLevel: true,
      _count: { select: { members: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  const result = teams.map((t) => ({
    id: t.id,
    leaderName: t.name,
    teamName: t.teamName,
    recruitmentNote: t.recruitmentNote,
    recruitmentStatus: t.recruitmentStatus,
    experienceLevel: t.experienceLevel,
    membersCount: t._count.members,
    maxMembers: 4,
    isMyTeam: t.id === myTeamId,
  }));

  return NextResponse.json({ success: true, teams: result });
}
