import { HeroSection } from "./sections/hero-section";
import { CountdownSection } from "./sections/countdown-section";
import { IntroSection } from "./sections/intro-section";
import { AboutSection } from "./sections/about-section";
import { ScheduleSection } from "./sections/schedule-section";
import { RulesSection } from "./sections/rules-section";
import { ApplySection } from "./sections/apply-section";
import { NoticeSection } from "./sections/notice-section";
import { ContactSection } from "./sections/contact-section";

const UnderConstruction = () => (
  <div className="flex min-h-dvh flex-col items-center justify-center gap-6 px-4 text-center">
    <span className="text-6xl">🚧</span>
    <h1 className="typo-h4">페이지 준비 중입니다</h1>
    <p className="typo-body2 text-gray-500">
      더 나은 모습으로 곧 찾아뵙겠습니다
    </p>
  </div>
);

const UNDER_CONSTRUCTION = true;

export default function Home() {
  if (UNDER_CONSTRUCTION) return <UnderConstruction />;

  return (
    <div>
      <HeroSection />
      <CountdownSection />
      <IntroSection />
      <AboutSection />
      <ScheduleSection />
      <RulesSection />
      <ApplySection />
      <NoticeSection />
      <ContactSection />
    </div>
  );
}
