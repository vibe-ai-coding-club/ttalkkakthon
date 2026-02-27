import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-6 px-4 py-24 text-center">
        <p className="rounded-full border border-border px-4 py-1 text-xs text-muted-foreground">
          2026.03.28 — 지구 어딘가
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-accent">딸깍톤</span> 시작된다! (임시)
        </h1>
        <p className="max-w-lg text-muted-foreground">
          GPT x Claude x Gemini — 세 가지 AI를 활용하여 혁신적인 프로젝트를 만들어보세요. 8시간 동안의 치열한 대결이
          시작됩니다.
        </p>
        <Link
          href="/register"
          className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
        >
          지금 참가 신청하기
        </Link>
      </section>

      {/* CTA Cards */}
      <section className="border-t border-border py-20">
        <div className="mx-auto grid max-w-4xl gap-6 px-4 sm:grid-cols-3">
          <Link
            href="/info"
            className="group rounded-lg border border-border p-6 transition-colors hover:border-accent/50"
          >
            <div className="mb-3 text-2xl">📋</div>
            <h2 className="mb-2 font-semibold group-hover:text-accent transition-colors">행사 정보</h2>
            <p className="text-sm text-muted-foreground">
              참가자격, 안내사항, 규칙, 심사기준 등 딸깍톤에 대한 모든 정보를 확인하세요.
            </p>
          </Link>

          <Link
            href="/schedule"
            className="group rounded-lg border border-border p-6 transition-colors hover:border-accent/50"
          >
            <div className="mb-3 text-2xl">🗓️</div>
            <h2 className="mb-2 font-semibold group-hover:text-accent transition-colors">상세 일정</h2>
            <p className="text-sm text-muted-foreground">
              입장부터 시상까지, 딸깍톤 당일 상세 식순을 확인하세요.
            </p>
          </Link>

          <Link
            href="/register"
            className="group rounded-lg border border-border p-6 transition-colors hover:border-accent/50"
          >
            <div className="mb-3 text-2xl">✍️</div>
            <h2 className="mb-2 font-semibold group-hover:text-accent transition-colors">참가 신청</h2>
            <p className="text-sm text-muted-foreground">
              팀 정보와 팀원을 등록하고 딸깍톤에 참가하세요. 1~4명까지 가능합니다.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
