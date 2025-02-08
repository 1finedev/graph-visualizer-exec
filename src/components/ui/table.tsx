import { IconChevronLeft, IconChevronRight, IconServer } from "public/svg";

const Table = () => {
  return (
    <div className="gap-5 lg:flex">
      <div className="mb-8 overflow-auto rounded-xl border shadow lg:mb-0">
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
                <div className="w-fit rounded-full bg-brand-blue-faded p-3">
                  <IconServer />
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary">
                    Loremipsumdolorsit
                  </p>
                  <p className="text-xs font-semibold text-secondary-muted">
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
                <div className="w-fit rounded-full bg-brand-blue-faded p-3">
                  <IconServer />
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary">
                    Loremipsumdolorsit
                  </p>
                  <p className="text-xs font-semibold text-secondary-muted">
                    192.168.1.1
                  </p>
                </div>
              </td>
              <td className="p-2.5">
                <div className="mx-auto w-fit rounded-full bg-[#FFE2E0] px-4 py-1">
                  {/* TODO: USE SHADCN BUTTON IF MORE BUTTONS EXIST FOR CONSISTENCY */}
                  <p className="text-center text-base font-bold text-[#C6190D]">
                    Critical
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-3 flex items-center justify-center gap-2.5">
          <IconChevronLeft />
          <p className="text-center text-secondary-muted">Showing 1-2 of 2</p>
          <IconChevronRight />
        </div>
      </div>
      <div className="rounded-xl border px-7 py-2.5 shadow">
        <h3 className="mb-4 text-lg font-medium text-secondary-muted">
          Contextual Risk
        </h3>
        <div className="mb-5 flex items-center justify-between lg:gap-12">
          <ul className="flex list-disc flex-col justify-between py-2 pl-5">
            <li className="text-base marker:text-brand-red">
              <span className="font-bold">2</span> Critical
            </li>
            <li className="text-base marker:text-[#E5372B]">
              <span className="font-bold">0</span> High
            </li>
            <li className="text-base marker:text-[#EBA622]">
              <span className="font-bold">0</span> Medium
            </li>
            <li className="text-base marker:text-[#08B94E]">
              <span className="font-bold">0</span> Low
            </li>
          </ul>

          <div className="flex h-[25vw] w-[25vw] items-center justify-center rounded-full border-8 border-[#C6190D] lg:h-[10vw] lg:w-[10vw] lg:border-8">
            <span className="text-3xl font-semibold text-[#656575] lg:text-4xl">
              2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
