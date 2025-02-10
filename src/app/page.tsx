"use client";
import FlowChart from "@/components/flowchart";
import Collapsible from "@/components/ui/collapsible";
import InfoBlock from "@/components/ui/InfoBlock";
import { SECTION_COLS_DATA } from "@/data/main";
import Table from "../components/ui/table";

export default function HomePage() {
  return (
    <div className="lg:flex lg:max-h-screen lg:justify-between lg:gap-5">
      <div className="scrollbar-hide w-full flex-shrink-0 overflow-y-scroll rounded-2xl bg-white px-4 py-5 lg:w-[23.67vw] lg:px-[30px]">
        <InfoBlock
          className="mb-12"
          title="Description"
          text="Lorem ipsum dolor sit amet consectetur. Aenean sodales pellentesque gravida nibh et magna faucibus. Dui commodo ut metus amet egestas habitant viverra. Quisque fusce senectus facilisis non diam leo nulla sem pellentesque. Sit in vel sed cursus metus sit fringilla vestibulum."
        />
        <InfoBlock
          className="mb-12"
          title="Extras"
          text="Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum velit purus viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum habitant congue massa in etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem suspendisse."
        />
        <hr />
        <div className="my-3 flex flex-col gap-[18.5px]">
          {SECTION_COLS_DATA.map((row) => {
            return (
              <div key={row.id} className="flex items-center gap-6">
                <h3
                  className={`${row.className} text-sm font-bold lg:text-base`}
                >
                  {row.key}
                </h3>
                <div className="flex items-center gap-2.5">
                  {row?.icon && <row.icon />}
                  <p className="text-sm text-secondary lg:text-base">
                    {row.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <h3 className="my-3 font-bold text-secondary-faded">
          Lorem ipsum dolor sit
        </h3>
        <Collapsible
          title="Lorem P"
          description="Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor convallis vitae arcu. Magna."
        />
        <Collapsible
          title="Lorem S"
          description="Lorem ipsum dolor sit amet consectetur. Quis viverra etiam pellentesque lectus semper in massa purus. Auctor aenean aenean senectus massa dignissim vehicula mi erat purus. Praesent scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis sed urna quam."
        />
        <Collapsible
          title="Lorem T"
          description="Lorem ipsum dolor sit amet consectetur. In laoreet elementum luctus odio. Id enim urna."
        />
      </div>
      <div className="mt-10 h-fit flex-1 rounded-2xl bg-white px-4 py-5 lg:mt-0 lg:px-[30px]">
        <h3 className="mb-5 text-xl font-bold text-brand-green">
          Lorem Lorem Lorem
        </h3>
        <FlowChart />
        <h3 className="my-5 text-xl font-bold text-brand-green">
          Lorem ipsum dolor sit
        </h3>
        <div className="gap-5 lg:flex">
          <Table />
          <div className="rounded-xl border px-7 py-2.5 shadow">
            <h3 className="mb-4 text-lg font-medium text-secondary-muted">
              Contextual Risk
            </h3>
            <div className="mb-5 flex items-center justify-between lg:gap-12">
              <ul className="flex list-disc flex-col py-2 pl-5">
                <li className="mb-3 text-base marker:text-brand-red">
                  <span className="font-bold">2</span> Critical
                </li>
                <li className="mb-3 text-base marker:text-[#E5372B]">
                  <span className="font-bold">0</span> High
                </li>
                <li className="mb-3 text-base marker:text-[#EBA622]">
                  <span className="font-bold">0</span> Medium
                </li>
                <li className="mb-3 text-base marker:text-[#08B94E]">
                  <span className="font-bold">0</span> Low
                </li>
              </ul>

              <div className="flex h-[25vw] w-[25vw] items-center justify-center rounded-full border-8 border-[#C6190D] lg:h-[8vw] lg:w-[8vw] lg:border-8">
                <span className="text-3xl font-semibold text-[#656575] lg:text-4xl">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
