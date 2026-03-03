"use client";

import { useEffect, useState } from "react";

const DEADLINE = new Date("2026-03-27T23:59:59+09:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calcTimeLeft = (): TimeLeft | null => {
  const diff = DEADLINE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const pad = (n: number) => String(n).padStart(2, "0");

export const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calcTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-linear-to-b from-primary-200 via-primary-400 to-primary-200 px-4 py-8 text-center text-white sm:py-12">
      {timeLeft ? (
        <>
          <p className="typo-subtitle4 sm:typo-subtitle2">✦ 신청 마감까지 ✦</p>
          <p className="mt-2 text-2xl font-bold tracking-wider sm:mt-4 sm:text-5xl">
            {pad(timeLeft.days)}
            <span className="typo-body3 sm:typo-subtitle1 mx-1 sm:mx-2">일</span>:{"  "}
            {pad(timeLeft.hours)}
            <span className="typo-body3 sm:typo-subtitle1 mx-1 sm:mx-2">시</span>:{"  "}
            {pad(timeLeft.minutes)}
            <span className="typo-body3 sm:typo-subtitle1 mx-1 sm:mx-2">분</span>:{"  "}
            {pad(timeLeft.seconds)}
            <span className="typo-body3 sm:typo-subtitle1 mx-1 sm:mx-2">초</span>
          </p>
        </>
      ) : (
        <p className="typo-subtitle2 sm:typo-h5">✦ 신청이 마감 되었어요 ✦</p>
      )}
    </section>
  );
};
