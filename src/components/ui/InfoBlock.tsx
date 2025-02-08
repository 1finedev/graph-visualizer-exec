"use client";
interface TitleTextProps {
  title: string;
  text: string;
  className: string;
}

const InfoBlock: React.FC<TitleTextProps> = ({ title, text, className }) => {
  return (
    <div className={`w-full ${className}`}>
      <h3 className="mb-3 text-xl font-bold text-brand-green">{title}</h3>
      <p className="text-xs text-secondary">{text}</p>
    </div>
  );
};

export default InfoBlock;
