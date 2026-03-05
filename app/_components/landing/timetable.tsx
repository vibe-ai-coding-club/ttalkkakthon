import type { TimetableItem } from "@/app/sections/landing-data";
import { TimetableRow } from "./timetable-row";

type TimetableProps = {
  items: TimetableItem[];
};

export const Timetable = ({ items }: TimetableProps) => {
  return (
    <ul className="w-full overflow-hidden rounded-2xl bg-gray-50 md:rounded-[20px]">
      {items.map((item, index) => (
        <li key={`${item.title}-${index}`} className="border-b border-gray-200 last:border-b-0">
          <TimetableRow item={item} />
        </li>
      ))}
    </ul>
  );
};
