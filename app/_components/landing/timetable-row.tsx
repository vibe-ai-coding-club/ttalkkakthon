import type { TimetableItem } from "@/app/sections/landing-data";

type TimetableRowProps = {
  item: TimetableItem;
};

export const TimetableRow = ({ item }: TimetableRowProps) => {
  return (
    <li className="flex flex-col items-center gap-4 px-5 py-7 text-center md:gap-6 md:py-10">
      <p className="typo-subtitle1 text-gray-800 md:typo-h5">{item.title}</p>
      <p className="typo-subtitle1 text-primary-400 md:typo-h5">{item.time}</p>
    </li>
  );
};
