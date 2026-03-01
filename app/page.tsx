import Link from "next/link";
import { timetable } from "./schedule/_data/timetable";

const infoCards = [
  { label: "일시", value: "2026년 3월 28일 (토)\n10:00 – 18:00" },
  { label: "장소", value: "추후 공지" },
  { label: "참가자격", value: "AI와 대화가 가능한 사람\n진지함 빼고 즐길 준비가 된 사람" },
];

const funRules = [
  {
    emoji: "🔥",
    title: "바이브코딩 대환영",
    desc: '"어? 이게 왜 돌아가지?" 상관없습니다. 작동만 하면 합격입니다.',
  },
  {
    emoji: "🙌",
    title: "비개발자 특별 전형 오픈",
    desc: "프로그램을 전혀 못 만들어도 괜찮습니다. 기획력, 디자인, 발표 솜씨, 그리고 뻔뻔함이면 충분합니다.",
  },
  {
    emoji: "🤖",
    title: "AI 무제한 허용",
    desc: '"인공지능님이 다 해주셨습니다"라고 솔직하게 고백하세요. 솔직함에 가산점을 드립니다.',
  },
  {
    emoji: "🐛",
    title: "버그는 곧 의도된 기능",
    desc: "에러 창이 뜬다고요? 심사위원의 날카로운 청문회를 방어할 궤변만 준비하시면 됩니다.",
  },
  {
    emoji: "🧠",
    title: "쓸모없음이 곧 최고의 스펙",
    desc: "결과물이 완벽하게 무가치하고 쓸모없을수록, 우승과 가까워집니다.",
  },
];

const participationRules = [
  {
    icon: "👥",
    title: "개인 및 팀 참여 가능",
    desc: "혼자서도, 팀(최대 4명)으로도 참가할 수 있습니다.",
  },
  {
    icon: "🤖",
    title: "AI 도구 무제한 사용",
    desc: "GPT, Claude, Gemini 등 어떤 AI 도구든 자유롭게 사용하세요.",
  },
  {
    icon: "🎤",
    title: "발표 시간 2분 제한",
    desc: "팀당 발표는 2분입니다. 시간 초과 시 마이크가 차단될 수 있습니다.",
  },
  {
    icon: "🔗",
    title: "배포 링크 제출 필수",
    desc: "발표 자료 형식은 자유이나, 배포 링크는 반드시 제출해야 합니다.",
  },
];

const notices = [
  "참가자는 반드시 개인 노트북을 지참해 주시기 바랍니다.",
  "접수는 꼭 정해진 배포 링크 사용 부탁드립니다.",
  "행사 관련 공지 및 안내는 피그잼을 통해 전달됩니다.",
  "행사장은 주차 지원이 불가하므로 대중교통 이용을 권장드립니다.",
  "심사는 참가자 투표 50% + 심사위원 50%로 진행됩니다.",
  "발표 자료 형식은 자유입니다. 다만, 배포 링크는 반드시 제출해 주셔야 합니다.",
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center gap-5 px-4 py-28 text-center">
        <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
          ttalkkakthon
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">
          AI와 함께 만드는 우리만의 뻔뻔한 프로젝트
        </p>
        <p className="text-sm text-muted-foreground">
          March 28, 2026 · 바이브코딩클럽 주최
        </p>
        <Link
          href="/register"
          className="mt-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
        >
          참가 신청하기
        </Link>
      </section>

      {/* 행사 소개 */}
      <section id="intro" className="scroll-mt-16 border-t border-border py-20 min-h-[85vh] flex flex-col justify-center">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-2xl font-bold">행사 소개</h2>
          <div className="mb-10 space-y-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              AI와 함께라면 누구나 무엇이든 만들 수 있는 시대가 왔습니다.
              바이브코딩으로 아이디어를 현실로 만들어보세요.
            </p>
            <p>
              GPT x Claude x Gemini — 세 가지 AI를 활용하여 혁신적인(혹은 완벽하게 쓸모없는)
              프로젝트를 만들어보세요. 8시간 동안의 치열한 대결이 시작됩니다.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {infoCards.map((card) => (
              <div key={card.label} className="rounded-lg border border-border p-5">
                <p className="mb-2 text-sm text-muted-foreground">{card.label}</p>
                <p className="font-medium whitespace-pre-line">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 행사 일정 */}
      <section id="schedule" className="scroll-mt-16 border-t border-border py-20 min-h-[85vh] flex flex-col justify-center">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-2 text-2xl font-bold">행사 일정</h2>
          <p className="mb-8 text-sm text-muted-foreground">
            장소 확정 및 참가 인원에 따라 변경될 수 있습니다.
          </p>
          <div className="space-y-3">
            {timetable.map((entry) => (
              <div
                key={entry.time}
                className="flex items-start gap-4 rounded-lg border border-border p-4"
              >
                <span className="shrink-0 mt-0.5 text-accent">✓</span>
                <div className="w-36 shrink-0 font-mono text-sm text-muted-foreground">
                  {entry.time}
                </div>
                <div>
                  <p className="font-semibold">{entry.title}</p>
                  {entry.note && (
                    <p className="text-sm text-muted-foreground">{entry.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 행사 규칙 */}
      <section className="border-t border-border py-20 min-h-[85vh] flex flex-col justify-center">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-2xl font-bold">행사 규칙</h2>
          <div className="space-y-4">
            {funRules.map((rule) => (
              <div key={rule.title} className="rounded-lg border border-border p-5">
                <p className="mb-1 font-semibold">
                  {rule.emoji} {rule.title}
                </p>
                <p className="text-sm text-muted-foreground">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 참가 규칙 */}
      <section id="rules" className="scroll-mt-16 border-t border-border py-20 min-h-[85vh] flex flex-col justify-center">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-2xl font-bold">참가 규칙</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {participationRules.map((rule) => (
              <div key={rule.title} className="rounded-lg border border-border p-5">
                <div className="mb-2 text-2xl">{rule.icon}</div>
                <p className="mb-1 font-semibold">{rule.title}</p>
                <p className="text-sm text-muted-foreground">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 참가 신청 CTA */}
      <section className="border-t border-border py-20 min-h-[60vh] flex flex-col justify-center">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="mb-3 text-2xl font-bold">참가 신청</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            지금 바로 딸깍톤에 참가하세요. 개인 또는 팀으로 신청할 수 있습니다.
          </p>
          <Link
            href="/register"
            className="inline-block rounded-lg bg-accent px-10 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
          >
            참가 신청하기
          </Link>
        </div>
      </section>

      {/* 유의 사항 */}
      <section id="notes" className="scroll-mt-16 bg-muted py-20 min-h-[85vh] flex flex-col justify-center">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-2xl font-bold">유의 사항</h2>
          <ul className="space-y-3">
            {notices.map((item) => (
              <li key={item} className="flex gap-3 text-sm">
                <span className="shrink-0 text-muted-foreground">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
