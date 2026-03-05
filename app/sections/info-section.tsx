import { InfoTab } from "@/app/_components/landing/info-tab";
import { SectionTitle } from "@/app/_components/section-title";

import { INFO_TABS } from "./landing-data";

export const InfoSection = () => {
  return (
    <section id="info" className="px-4 py-[90px] md:px-8 md:pt-[180px] md:pb-[200px]">
      <div className="mx-auto max-w-[1280px] md:max-w-[960px]">
        <SectionTitle chipLabel="Info" title="안내사항" />

        <div className="mt-[26px] md:mt-[52px]">
          <InfoTab tabs={INFO_TABS} />
        </div>
      </div>
    </section>
  );
};
