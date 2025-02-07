"use client";
import FlowChart from "@/components/flowchart";
import Collapsible from "@/components/ui/collapsible";
import InfoBlock from "@/components/ui/InfoBlock";
import { SECTION_COLS_DATA } from "@/data/main";
import { Server } from "lucide-react";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <div className="flex justify-between gap-5">
      <div className="w-[30%] flex-shrink-0 rounded-2xl bg-white px-[30px] py-5">
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
                <h3 className={`${row.className} font-bold`}>{row.key}</h3>
                <p className="text-[#525D73]">{row.value}</p>
              </Fragment>
            );
          })}
        </div>
        <hr />
        <h3 className="my-3 font-bold text-[#33415]">Lorem ipsum dolor sit</h3>
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
        <h3 className="mb-5 text-xl font-bold text-[#02983E]">
          Lorem Lorem Lorem
        </h3>

        <FlowChart />

        <h3 className="my-5 text-xl font-bold text-[#02983E]">
          Lorem ipsum dolor sit{" "}
        </h3>

        <div className="flex justify-between">
          <div className="overflow-hidden rounded-xl border shadow">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="border-b">
                  <td className="px-6 py-2.5 text-left text-sm text-[#858D9D]">
                    Asset
                  </td>
                  <td className="px-6 py-2.5 text-right text-sm text-[#858D9D]">
                    Contextual Risk
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="flex items-center gap-3 p-2.5">
                    <div className="w-fit rounded-full bg-[#D7EAFF] p-3">
                      <Server className="stroke-[#1873DE]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#525D73]">
                        Loremipsumdolorsit
                      </p>
                      <p className="text-xs font-semibold text-[#667085]">
                        192.168.1.1
                      </p>
                    </div>
                  </td>
                  <td className="p-2.5">
                    <div className="mx-auto w-fit rounded-full bg-[#FFE2E0] px-4 py-1">
                      <p className="text-center text-base font-bold text-[#C6190D]">
                        Critical
                      </p>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="flex items-center gap-3 p-2.5">
                    <div className="w-fit rounded-full bg-[#D7EAFF] p-3">
                      <Server className="stroke-[#1873DE]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#525D73]">
                        Loremipsumdolorsit
                      </p>
                      <p className="text-xs font-semibold text-[#667085]">
                        192.168.1.1
                      </p>
                    </div>
                  </td>
                  <td className="p-2.5">
                    <div className="mx-auto w-fit rounded-full bg-[#FFE2E0] px-4 py-1">
                      <p className="text-center text-base font-bold text-[#C6190D]">
                        Critical
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
