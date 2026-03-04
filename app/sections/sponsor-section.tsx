import { Button } from "@/app/_components/button";
import { SectionTitle } from "@/app/_components/section-title";

import { SPONSOR_LOGOS } from "./landing-data";

export const SponsorSection = () => {
  return (
    <section id="sponsor" className="pb-20 md:pb-[220px]">
      <div className="bg-gray-50 px-4 pt-10 pb-[60px] md:px-8 md:pt-[60px] md:pb-[90px]">
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle
            chipLabel="Sponsor"
            title="후원사"
            className="gap-2 md:gap-3"
            titleClassName="max-w-[928px]"
          />
          <p className="mx-auto mt-4 text-center typo-subtitle3 text-gray-800 md:mt-6 md:typo-h6">
            대관, 장비 대여, 참여자 식사 등 더 좋은 해커톤 경험을 위해 후원을 받고 있어요
          </p>

          <div className="mt-[26px] grid gap-3 md:mt-[52px] md:grid-cols-3 md:gap-5">
            {SPONSOR_LOGOS.map((name) => (
              <div
                key={name}
                className="flex h-32 items-center justify-center rounded-xl bg-white text-center text-gray-600 md:h-[200px] md:rounded-none"
              >
                <span className="typo-subtitle2 md:typo-subtitle1">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[26px] flex justify-center md:mt-[52px]">
        <Button color="gray" size="small" className="md:h-[66px] md:rounded-[16px] md:px-8 md:text-[24px] md:leading-[34px] md:font-bold md:tracking-[-0.4px]">
          후원 문의하기
        </Button>
      </div>
    </section>
  );
};
