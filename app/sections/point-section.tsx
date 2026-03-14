import Image from "next/image";

import { MotionItem } from "@/app/_components/motion-section";
import { SectionTitle } from "@/app/_components/section-title";
import { POINT_CARDS } from "./landing-data";

export const PointSection = () => {
  return (
    <section id="point" className="px-4 pt-[90px] md:px-8 md:pt-[180px]">
      <div className="mx-auto max-w-[1280px]">
        <MotionItem>
          <SectionTitle chipLabel="Point" title="딸깍톤이 특별한 3가지 이유!" />
        </MotionItem>

        <div className="mt-9 grid gap-8 md:mt-[52px] md:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {POINT_CARDS.map((card, index) => (
            <MotionItem key={card.title} delay={0.12 * (index + 1)}>
              <article
                className={`overflow-hidden rounded-xl md:rounded-[14px] ${
                  index === 2 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl md:rounded-[14px] border-2 border-[#FFE342]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="mt-0 flex h-[114px] flex-col justify-center rounded-xl bg-gray-50 px-5 md:rounded-[14px] md:px-7">
                <h3 className="typo-subtitle1 text-gray-850 md:typo-h6">{card.title}</h3>
                <p className="typo-body2 mt-0.5 text-gray-700 md:mt-1">{card.description}</p>
              </div>
            </article>
            </MotionItem>
          ))}
        </div>
      </div>
    </section>
  );
};
