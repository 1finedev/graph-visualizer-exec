"use client";
import FlowChart from "@/components/flowchart";
import Collapsible from "@/components/ui/collapsible";
import InfoBlock from "@/components/ui/InfoBlock";
import { SECTION_COLS_DATA } from "@/data/main";
import { Fragment } from "react";
import Table from "../components/ui/table";

export default function HomePage() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-5">
      <div className="w-full flex-shrink-0 rounded-2xl bg-white px-[30px] py-5 lg:w-[30%]">
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
        <div className="my-3 grid grid-cols-2">
          {SECTION_COLS_DATA.map((row) => {
            return (
              <Fragment key={row.id}>
                <h3 className={`${row.className} text-base font-bold`}>
                  {row.key}
                </h3>
                <div className="flex items-center gap-2.5">
                  {row?.icon && <row.icon />}
                  <p className="text-base text-secondary">{row.value}</p>
                </div>
              </Fragment>
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
      <div className="h-fit flex-1 rounded-2xl bg-white px-[30px] py-5">
        <h3 className="mb-5 text-xl font-bold text-brand-green">
          Lorem Lorem Lorem
        </h3>
        <FlowChart />
        <h3 className="my-5 text-xl font-bold text-brand-green">
          Lorem ipsum dolor sit
        </h3>
        <Table />
      </div>
    </div>
  );
}
