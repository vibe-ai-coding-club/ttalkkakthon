export type TimetableEntry = {
  time: string;
  title: string;
  note?: string;
  type: "default" | "break" | "highlight";
};

export const timetable: TimetableEntry[] = [
  {
    time: "10:30 – 11:00",
    title: "참가자 입장",
    note: "현장 등록 및 자리 배치",
    type: "default",
  },
  {
    time: "11:00 – 11:30",
    title: "팀별 1분 소개",
    note: "발표 순서 추첨",
    type: "highlight",
  },
  {
    time: "11:30 – 16:00",
    title: "개발 시간",
    note: "자유롭게 개발 진행",
    type: "default",
  },
  {
    time: "12:30 – 13:30",
    title: "점심시간",
    note: "식사 및 휴식",
    type: "break",
  },
  {
    time: "16:00 – 17:30",
    title: "발표 및 심사",
    note: "팀당 2분 발표",
    type: "highlight",
  },
  {
    time: "17:30 – 18:00",
    title: "이벤트 + 시상 + 단체사진",
    type: "highlight",
  },
];
