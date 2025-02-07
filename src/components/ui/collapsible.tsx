import { Server } from "lucide-react";
import { useState } from "react";

interface TitleTextProps {
  title: string;
  description: string;
}

const Collapsible: React.FC<TitleTextProps> = ({ title, description }) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div
      className="mb-5 rounded-[15px] border border-[#F0F1F3] bg-white px-[18px] py-[13px] shadow-md"
      onClick={() => setCollapsed((prev) => !prev)}
    >
      <h3 className="mb-3 text-base font-bold text-[#030229]">{title}</h3>
      <div className="mb-5 mt-3 flex justify-around rounded-lg bg-[#FAFAFA] px-4 py-1.5">
        <div className="flex items-center justify-between gap-2">
          <div className="rounded-full bg-[#D7EAFF] p-3">
            <Server className="stroke-[#1873DE]" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[#404A60]">Server</h4>
            <p className="text-[10px] font-medium text-[#667085]">Server</p>
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
        <p className="text-base text-[#525D73]">{description}</p>
      </div>
    </div>
  );
};

export default Collapsible;
