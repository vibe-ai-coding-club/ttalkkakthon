import { CultureCardRoller } from "@/app/_components/landing/culture-card-roller";
import { MotionItem } from "@/app/_components/motion-section";
import { SectionTitle } from "@/app/_components/section-title";

import { CULTURE_ITEMS } from "./landing-data";

export const CultureSection = () => {
  return (
    <section
      id="culture"
      className="overflow-hidden bg-primary-300 py-[50px] md:py-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <MotionItem>
          <SectionTitle
            chipLabel="Culture"
            chipClassName="bg-white"
            title="딸깍톤만의 특별한 해커톤 문화"
            titleClassName="text-white"
          />
        </MotionItem>
      </div>

      <MotionItem delay={0.15}>
        <div className="relative left-1/2 mt-9 w-screen -translate-x-1/2 md:mt-[52px]">
          <div className="w-full">
            <CultureCardRoller items={CULTURE_ITEMS} />
          </div>
        </div>
      </MotionItem>
    </section>
  );
};
