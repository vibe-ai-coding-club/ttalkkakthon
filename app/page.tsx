import { AboutSection } from "./sections/about-section";
import { CultureSection } from "./sections/culture-section";
import { FooterSection } from "./sections/footer-section";
import { HeroSection } from "./sections/hero-section";
import { InfoSection } from "./sections/info-section";
import { ScheduleSection } from "./sections/schedule-section";
import { SponsorSection } from "./sections/sponsor-section";
import { StopwatchSection } from "./sections/stopwatch-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StopwatchSection />
      <AboutSection />
      <ScheduleSection />
      <CultureSection />
      <InfoSection />
      <SponsorSection />
      <FooterSection />
    </div>
  );
}
