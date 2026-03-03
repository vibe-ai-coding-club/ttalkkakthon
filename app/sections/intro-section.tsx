const cards = [
  {
    title: "단 하루, 8시간 만 진행해요",
    desc: "2026.03.28 (10:00-18:00)",
  },
  {
    title: "쾌적하고 넓은 공간을 제공해요",
    desc: "Desc",
  },
  {
    title: "AI와 대화만 가능하면 참여 가능해요",
    desc: "개인·팀 참가 가능",
  },
];

export const IntroSection = () => {
  return (
    <section id="intro" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-5xl px-4 text-center">
        {/* 배지 */}
        <span className="typo-subtitle4 inline-block rounded-full bg-amber-100 px-5 py-1.5 text-amber-500">About</span>

        {/* 타이틀 */}
        <h2 className="typo-h4 sm:typo-h3 mt-4 mb-10">언제, 어디에서, 누가 참여할 수 있나요?</h2>

        {/* 카드 */}
        <div className="grid gap-5 sm:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="overflow-hidden rounded-2xl bg-gray-50">
              {/* 이미지 플레이스홀더 */}
              <div className="aspect-4/3 bg-gray-200" />

              {/* 텍스트 */}
              <div className="px-5 py-4 text-left">
                <p className="typo-subtitle2">{card.title}</p>
                <p className="typo-body3 mt-1 text-gray-600">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
