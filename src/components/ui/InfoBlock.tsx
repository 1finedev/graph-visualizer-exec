"use client";
interface TitleTextProps {
  title: string;
  text: string;
  className: string;
}

const InfoBlock: React.FC<TitleTextProps> = ({ title, text, className }) => {
  return (
    <div className={className}>
      <h3 className="mb-3 text-xl font-bold text-[#02983E]">{title}</h3>
      <p className="text-xs text-[#525D73]">{text}</p>
    </div>
  );
};

export default InfoBlock;
