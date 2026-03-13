"use client";

import { useCallback, useEffect, useState } from "react";
import { ProjectGrid } from "./project-grid";

type ProjectData = {
  id: string;
  title: string;
  description: string;
  teamName: string;
  teamId: string;
  voteCount: number;
  githubUrl: string;
  demoUrl: string | null;
  imageUrl: string | null;
  linkUrl: string | null;
};

type SessionData = {
  isActive: boolean;
  maxVotes: number;
} | null;

type VoterData = {
  memberId: string;
  name: string;
  teamId: string;
};

type Props = {
  voter: VoterData;
};

export const VotePage = ({ voter }: Props) => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [session, setSession] = useState<SessionData>(null);
  const [votedProjectIds, setVotedProjectIds] = useState<Set<string>>(new Set());
  const [loadingProjectId, setLoadingProjectId] = useState<string | null>(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [error, setError] = useState("");

  // 프로젝트 목록 + 세션 상태 로드
  const fetchProjects = useCallback(async () => {
    try {
      const res = await fetch("/api/vote/projects");
      const json = await res.json();
      if (json.success) {
        setProjects(json.data.projects);
        setSession(json.data.session);
      }
    } catch {
      setError("프로젝트 목록을 불러올 수 없습니다.");
    } finally {
      setPageLoading(false);
    }
  }, []);

  // 내 투표 현황 로드
  const fetchMyVotes = useCallback(async () => {
    try {
      const res = await fetch(`/api/vote?memberId=${voter.memberId}`);
      const json = await res.json();
      if (json.success) {
        setVotedProjectIds(new Set(json.data.votedProjectIds));
      }
    } catch {
      // silent
    }
  }, [voter.memberId]);

  // 초기 로드
  useEffect(() => {
    fetchProjects();
    fetchMyVotes();
  }, [fetchProjects, fetchMyVotes]);

  // 투표 실행
  const handleVote = async (projectId: string) => {
    setLoadingProjectId(projectId);
    try {
      const res = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ memberId: voter.memberId, projectId }),
      });

      const json = await res.json();
      if (json.success) {
        setVotedProjectIds((prev) => new Set([...prev, projectId]));
        setProjects((prev) =>
          prev.map((p) => (p.id === projectId ? { ...p, voteCount: p.voteCount + 1 } : p)),
        );
      } else {
        alert(json.message);
      }
    } catch {
      alert("서버 오류가 발생했습니다.");
    } finally {
      setLoadingProjectId(null);
    }
  };

  // 투표 취소
  const handleCancel = async (projectId: string) => {
    setLoadingProjectId(projectId);
    try {
      const res = await fetch("/api/vote", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ memberId: voter.memberId, projectId }),
      });

      const json = await res.json();
      if (json.success) {
        setVotedProjectIds((prev) => {
          const next = new Set(prev);
          next.delete(projectId);
          return next;
        });
        setProjects((prev) =>
          prev.map((p) => (p.id === projectId ? { ...p, voteCount: p.voteCount - 1 } : p)),
        );
      } else {
        alert(json.message);
      }
    } catch {
      alert("서버 오류가 발생했습니다.");
    } finally {
      setLoadingProjectId(null);
    }
  };

  const isSessionActive = session?.isActive ?? false;
  const remainingVotes = session ? session.maxVotes - votedProjectIds.size : 0;

  if (pageLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="typo-body1 text-muted-foreground">로딩 중...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pt-8 pb-20">
      {/* 헤더 */}
      <div className="mb-8">
        <h1 className="typo-h4 mb-2">프로젝트 투표</h1>
        <p className="typo-body3 text-muted-foreground">
          마음에 드는 프로젝트에 투표해주세요!
        </p>
      </div>

      {/* 상태 바 */}
      <div className="mb-6 flex flex-wrap items-center gap-4 rounded-xl border border-border p-4">
        {/* 세션 상태 */}
        <div className="flex items-center gap-2">
          <span
            className={`h-2.5 w-2.5 rounded-full ${isSessionActive ? "bg-success animate-pulse" : "bg-gray-300"}`}
          />
          <span className="typo-subtitle4">
            {isSessionActive ? "투표 진행 중" : "투표 준비 중"}
          </span>
        </div>

        <div className="h-4 w-px bg-border" />
        <span className="typo-body3 text-muted-foreground">
          {voter.name}님
        </span>

        {isSessionActive && (
          <>
            <div className="h-4 w-px bg-border" />
            <span className="typo-body3 text-muted-foreground">
              남은 투표: <strong className="text-foreground">{remainingVotes}</strong>/{session?.maxVotes}
            </span>
          </>
        )}
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-error/10 p-4 text-error typo-body3">{error}</div>
      )}

      {/* 프로젝트 그리드 */}
      <ProjectGrid
        projects={projects}
        votedProjectIds={votedProjectIds}
        myTeamId={voter.teamId}
        isSessionActive={isSessionActive}
        onVote={handleVote}
        onCancel={handleCancel}
        loadingProjectId={loadingProjectId}
      />
    </div>
  );
};
