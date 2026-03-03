import { RunawayButton } from "@/app/_components/runaway-button";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-400 px-4 text-center">
      {/* 타이틀 */}
      <h1 className="typo-h2 sm:typo-h1 text-white">TTALKKAKTHON</h1>

      {/* 서브타이틀 */}
      <p className="typo-subtitle3 sm:typo-subtitle1 text-white/60">
        엉뚱한 상상이
        <br className="sm:hidden" /> 딸깍하고 현실이 되는 곳
      </p>

      {/* CTA */}
      <RunawayButton />
    </section>
  );
};
