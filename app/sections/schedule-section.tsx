import Link from "next/link";

import { SectionTitle } from "@/app/_components/section-title";
import { Timetable } from "@/app/_components/landing/timetable";

import { TIMETABLE } from "./landing-data";

export const ScheduleSection = () => {
  return (
    <section id="schedule" className="px-4 py-[90px] md:px-8 md:py-[180px]">
      <div className="mx-auto max-w-[1280px]">
        <SectionTitle chipLabel="Schedule" title="행사 타임테이블" />

        <div className="mt-[46px] md:mt-[52px]">
          <Timetable items={TIMETABLE} />
        </div>

        <div className="mt-10 flex justify-center md:mt-[72px]">
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-[10px] bg-primary-400 px-[18px] py-[10px] text-[16px] leading-[24px] font-semibold tracking-[-0.2px] text-white transition-colors hover:bg-primary-500 md:rounded-2xl md:px-8 md:py-4 md:text-[24px] md:leading-[34px] md:font-bold md:tracking-[-0.4px]"
          >
            딸깍톤 신청하기
          </Link>
        </div>
      </div>
    </section>
  );
};
