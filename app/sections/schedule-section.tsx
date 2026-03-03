import Link from "next/link";

const schedule = [
  { title: "참가자 입장", time: "10:00 - 11:00" },
  { title: "팀별 1분 소개", time: "11:00 – 11:30" },
  { title: "개발 시간", time: "11:30 – 16:00" },
  { title: "점심 시간", time: "12:30 – 13:30" },
  { title: "발표 및 심사", time: "16:00 – 17:30" },
  { title: "마무리 이벤트", time: "17:30 – 18:00" },
];

export const ScheduleSection = () => {
  return (
    <section id="schedule" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-5xl px-4 text-center">
        {/* 배지 */}
        <span className="typo-subtitle4 inline-block rounded-full bg-amber-100 px-5 py-1.5 text-amber-500">
          Schedule
        </span>

        {/* 타이틀 */}
        <h2 className="typo-h4 sm:typo-h3 mt-4 mb-10">행사 타임테이블</h2>

        {/* 타임테이블 카드 */}
        <div className="rounded-2xl bg-gray-50 px-6 py-2">
          {schedule.map((entry, i) => (
            <div
              key={entry.title}
              className={`py-6 text-center ${i < schedule.length - 1 ? "border-b border-gray-200" : ""}`}
            >
              <p className="typo-subtitle3">{entry.title}</p>
              <p className="typo-subtitle1 mt-1 text-primary-400">{entry.time}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/register"
          className="typo-btn2 mt-10 inline-block rounded-xl bg-primary-400 px-10 py-4 text-white hover:bg-primary-500 transition-colors"
        >
          딸깍톤 신청하기
        </Link>
      </div>
    </section>
  );
};
