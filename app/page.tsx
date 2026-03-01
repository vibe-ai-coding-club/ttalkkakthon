import { HeroSection } from "./sections/hero-section";
import { IntroSection } from "./sections/intro-section";
import { AboutSection } from "./sections/about-section";
import { ScheduleSection } from "./sections/schedule-section";
import { RulesSection } from "./sections/rules-section";
import { ApplySection } from "./sections/apply-section";
import { NoticeSection } from "./sections/notice-section";
import { ContactSection } from "./sections/contact-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
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
