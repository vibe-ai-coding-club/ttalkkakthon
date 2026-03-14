import { type ReactNode } from "react";

import { SectionTitle } from "@/app/_components/section-title";

const ABOUT_ITEMS: { label: string; value: ReactNode }[] = [
  { label: "모집 기간", value: "2026년 03월 14일 17:00 ~ 03월 20일 23:59" },
  { label: "대회 일시", value: "2026년 03월 28일 토요일" },
  {
    label: "장소",
    value: (
      <a
        href="https://naver.me/Fr7pSr4f"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 transition-colors hover:text-gray-900"
      >
        숭실대학교 정보과학관 102호
      </a>
    ),
  },
  {
    label: "주제",
    value: "만우절에 세상을 뒤집을 킹받는/엉뚱한 서비스 만들기",
  },
  { label: "참가비", value: "20,000원 (점심식사 비용이 포함되어있습니다.)" },
  { label: "심사기준 및 방식", value: "AI 평가 및 상호평가" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="px-4 pt-[60px] md:px-8 md:pt-[100px]">
      <div className="mx-auto max-w-[1280px] md:max-w-[960px]">
        <div className="mb-9 md:mb-[52px]">
          <p className="typo-body1 text-center leading-[24px] text-gray-800 md:typo-subtitle1 md:leading-[28px]">
            세상에서 가장 <span className="text-primary-400">유쾌하고 창의적인</span> 기술 축제,
            <br />
            <span className="font-bold text-gray-900">만우절 딸깍톤</span>에 여러분을 초대합니다.
          </p>
          <br />
          <p className="typo-body2 text-center leading-[24px] text-gray-800 md:typo-subtitle2 md:leading-[28px]">
            본 행사는 AI 툴을 자유자재로 다루는 <span className="font-bold text-primary-400">&apos;바이브 코더&apos;</span>들이 모여,
            <br />
            평소 생각만 했던 <span className="text-primary-400">엉뚱하고 재미있는</span> 아이디어를
            <br />
            <span className="font-bold text-gray-900">&apos;딸깍&apos;</span> 한 번의 속도로 실제 서비스로 구현해내는 <span className="font-bold whitespace-nowrap text-gray-900">데이톤(Day-thon)</span>입니다.
          </p>
        </div>

        <SectionTitle chipLabel="About" title="행사 소개" />

        <div className="mx-auto mt-10 max-w-[640px] divide-y divide-gray-100 rounded-2xl bg-gray-50 px-6 py-2 md:mt-14 md:px-10 md:py-4">
          {ABOUT_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col gap-1 py-4 md:flex-row md:items-center md:gap-0 md:py-5">
              <span className="typo-subtitle2 w-[160px] shrink-0 text-gray-900">{item.label}</span>
              <span className="typo-body2 text-gray-700">{item.value}</span>
            </div>
          ))}
        </div>

        <p className="typo-caption mt-4 text-center text-gray-400 md:mt-6">* 상기 내용은 변경될 수 있습니다.</p>
      </div>
    </section>
  );
};
