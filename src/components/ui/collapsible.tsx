import { IconServer } from "public/svg";
import { useState } from "react";

interface TitleTextProps {
  title: string;
  description: string;
}

const Collapsible: React.FC<TitleTextProps> = ({ title, description }) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div
      className="mb-5 rounded-[15px] border border-border bg-white px-3 py-2 shadow-md lg:px-[18px] lg:py-[13px]"
      onClick={() => setCollapsed((prev) => !prev)}
    >
      <h3 className="mb-3 text-base font-bold text-[#030229]">{title}</h3>
      <div className="mb-5 mt-3 flex justify-around rounded-lg bg-[#FAFAFA] px-1 py-1.5 lg:px-4">
        <div className="flex items-center justify-between gap-2">
          <div className="rounded-full bg-brand-blue-faded p-1 lg:p-3">
            <IconServer />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[#404A60]">Server</h4>
            <p className="text-[10px] font-medium text-secondary-muted">
              Server
            </p>
          </div>
        </div>
        <div className="mx-4 border" />
        <div>
          <p className="text-xs font-semibold text-[#404A60]">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
      <div
        className={`${collapsed ? "max-h-0" : "max-h-[20vh]"} overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <p className="text-base text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default Collapsible;
