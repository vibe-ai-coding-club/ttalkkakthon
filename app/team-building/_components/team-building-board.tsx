"use client";

import { signOut } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";

type Team = {
  id: string;
  leaderName: string;
  teamName: string | null;
  recruitmentNote: string | null;
  recruitmentStatus: string;
  experienceLevel: string;
  membersCount: number;
  maxMembers: number;
  isMyTeam: boolean;
};

const experienceLevelLabel: Record<string, string> = {
  BEGINNER: "입문",
  JUNIOR: "주니어",
  SENIOR: "시니어",
  VIBE_CODER: "바이브코더",
};

const experienceLevelStyle: Record<string, string> = {
  BEGINNER: "bg-emerald-100 text-emerald-700",
  JUNIOR: "bg-blue-100 text-blue-700",
  SENIOR: "bg-purple-100 text-purple-700",
  VIBE_CODER: "bg-orange-100 text-orange-700",
};

const recruitmentLabel: Record<string, string> = {
  NOT_RECRUITING: "모집 안함",
  RECRUITING: "모집중",
  CLOSED: "모집 완료",
};

export const TeamBuildingBoard = ({ userName }: { userName: string }) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [expFilter, setExpFilter] = useState("ALL");
  const [transferTarget, setTransferTarget] = useState<Team | null>(null);
  const [transferring, setTransferring] = useState(false);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await fetch("/api/team-building/teams");
        const data = await res.json();
        if (data.success) setTeams(data.teams);
      } catch {
        console.error("Failed to fetch teams");
      } finally {
        setLoading(false);
      }
    };
    fetchTeams();
  }, []);

  const filtered = useMemo(() => {
    const result = teams.filter((t) => {
      if (expFilter !== "ALL" && t.experienceLevel !== expFilter) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        if (
          !t.teamName?.toLowerCase().includes(q) &&
          !t.recruitmentNote?.toLowerCase().includes(q) &&
          !t.leaderName.toLowerCase().includes(q)
        ) return false;
      }
      return true;
    });
    return result.sort((a, b) => (a.isMyTeam === b.isMyTeam ? 0 : a.isMyTeam ? -1 : 1));
  }, [teams, search, expFilter]);

  const handleCardClick = (team: Team) => {
    if (team.isMyTeam) return;
    if (team.recruitmentStatus !== "RECRUITING") return;
    if (team.membersCount >= team.maxMembers) return;
    setTransferTarget(team);
  };

  const handleTransfer = async () => {
    if (!transferTarget) return;
    setTransferring(true);
    try {
      const res = await fetch("/api/team-building/transfer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetTeamId: transferTarget.id }),
      });
      const json = await res.json();
      if (json.success) {
        window.location.reload();
      } else {
        alert(json.message);
      }
    } catch {
      alert("서버 오류가 발생했습니다.");
    } finally {
      setTransferring(false);
      setTransferTarget(null);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-muted-foreground">불러오는 중...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6 flex items-start justify-between">
        <div className="space-y-2">
          <h2 className="typo-h6">팀원 모집 게시판</h2>
          <p className="typo-body3 text-muted-foreground">
            팀원을 모집하고 있는 팀 목록입니다. 팀을 클릭하면 이동할 수 있습니다.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="typo-caption1 text-muted-foreground">{userName}</span>
          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/team-building/login" })}
            className="rounded-md border border-border px-2.5 py-1 typo-caption1 cursor-pointer transition-colors hover:bg-muted"
          >
            로그아웃
          </button>
        </div>
      </div>

      {/* 필터 */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="팀 이름, 소개글, 대표자 검색"
          className="w-full max-w-xs rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none focus:border-accent transition-colors"
        />
        <select
          value={expFilter}
          onChange={(e) => setExpFilter(e.target.value)}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm cursor-pointer"
        >
          <option value="ALL">경험: 전체</option>
          {Object.entries(experienceLevelLabel).map(([k, v]) => (
            <option key={k} value={k}>{v}</option>
          ))}
        </select>
        <span className="text-xs text-muted-foreground">{filtered.length}개 팀</span>
      </div>

      {/* 카드 그리드 */}
      {filtered.length === 0 ? (
        <div className="rounded-lg border border-border py-16 text-center">
          <p className="text-muted-foreground">
            {teams.length === 0 ? "모집 중인 팀이 없습니다." : "검색 결과가 없습니다."}
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((team) => {
            const isRecruiting = team.recruitmentStatus === "RECRUITING";
            const isFull = team.membersCount >= team.maxMembers;
            const canJoin = !team.isMyTeam && isRecruiting && !isFull;

            return (
              <div
                key={team.id}
                onClick={() => handleCardClick(team)}
                className={`rounded-xl border p-5 space-y-3 transition-colors ${
                  team.isMyTeam
                    ? isRecruiting
                      ? "border-accent/40 bg-accent/3"
                      : "border-border bg-muted/30 opacity-60"
                    : canJoin
                      ? "border-border hover:border-accent/30 cursor-pointer"
                      : "border-border opacity-50"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <h3 className="typo-subtitle1 truncate">
                      {team.teamName || team.leaderName}
                    </h3>
                    {team.isMyTeam && (
                      <span className="shrink-0 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                        내 팀
                      </span>
                    )}
                    {!team.isMyTeam && isFull && (
                      <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                        마감
                      </span>
                    )}
                  </div>
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                    experienceLevelStyle[team.experienceLevel] ?? "bg-gray-100 text-gray-600"
                  }`}>
                    {experienceLevelLabel[team.experienceLevel] ?? team.experienceLevel}
                  </span>
                </div>

                {team.isMyTeam && !isRecruiting && (
                  <p className="typo-caption1 text-muted-foreground">
                    {recruitmentLabel[team.recruitmentStatus] ?? team.recruitmentStatus}
                  </p>
                )}

                {team.recruitmentNote && (
                  <p className="typo-body3 text-muted-foreground line-clamp-2">
                    {team.recruitmentNote}
                  </p>
                )}

                <div className="flex items-center justify-between pt-1">
                  <span className="typo-caption1 text-muted-foreground">
                    {team.leaderName}
                  </span>
                  <span className="typo-caption1 font-medium">
                    {team.membersCount}/{team.maxMembers}명
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 팀 이동 컨펌 모달 */}
      {transferTarget && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget && !transferring) setTransferTarget(null);
          }}
        >
          <div className="w-full max-w-sm rounded-lg border border-border bg-background p-5 space-y-4">
            <h3 className="typo-subtitle1">팀 이동</h3>
            <p className="typo-body3 text-muted-foreground">
              <strong className="text-foreground">{transferTarget.teamName || transferTarget.leaderName}</strong> 팀으로 이동하시겠습니까?
            </p>
            <p className="typo-caption1 text-muted-foreground">
              현재 팀에서 나가고 선택한 팀에 합류합니다.
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setTransferTarget(null)}
                disabled={transferring}
                className="rounded-md border border-border px-4 py-2 typo-btn4 cursor-pointer transition-colors hover:bg-muted disabled:opacity-50"
              >
                취소
              </button>
              <button
                type="button"
                onClick={handleTransfer}
                disabled={transferring}
                className="rounded-md bg-accent px-4 py-2 typo-btn4 text-white cursor-pointer transition-colors hover:bg-accent-hover disabled:opacity-50"
              >
                {transferring ? "이동 중..." : "이동하기"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
