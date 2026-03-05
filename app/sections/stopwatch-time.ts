export const STOPWATCH_DEADLINE = new Date("2026-03-27T23:59:59+09:00");

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const calcTimeLeft = (): TimeLeft | null => {
  const diff = STOPWATCH_DEADLINE.getTime() - Date.now();

  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export const ZERO_TIME_LEFT: TimeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export const padTimeUnit = (value: number) => String(value).padStart(2, "0");
