type InfoCardProps = {
  index: number;
  content: string;
};

export const InfoCard = ({ index, content }: InfoCardProps) => {
  return (
    <li className="border-b border-gray-200 py-5 last:border-b-0 md:py-10">
      <div className="flex items-start gap-2 md:items-center md:gap-3">
        <span className="typo-subtitle4 shrink-0 text-gray-400 md:typo-h6">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="typo-subtitle4 text-gray-800 md:typo-h6">{content}</p>
      </div>
    </li>
  );
};
