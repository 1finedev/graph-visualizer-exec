"use client";
interface TitleTextProps {
  title: string;
  text: string;
  className: string;
}

const InfoBlock: React.FC<TitleTextProps> = ({ title, text, className }) => {
  return (
    <div className={className}>
      <h3 className="text-brand-green mb-3 text-xl font-bold">{title}</h3>
      <p className="text-xs text-secondary">{text}</p>
    </div>
  );
};

export default InfoBlock;
