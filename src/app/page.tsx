import InfoBlock from "@/components/ui/InfoBlock";

export default function HomePage() {
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="w-[30%] flex-shrink-0 rounded-2xl bg-white">
        <InfoBlock />
      </div>
      <div className="flex-1 bg-white"></div>
    </div>
  );
}
