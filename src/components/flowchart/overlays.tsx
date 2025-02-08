import { useMousePosition } from "@/hooks/useMousePosition";
import { IconFile, IconServer, IconShieldX } from "public/svg";

export const OverlayZero = () => {
  const { x, y } = useMousePosition();

  if (x === 0 || y === 0) return;

  return (
    <div
      className="w-max text-nowrap rounded-[20px] bg-white px-[30px] pb-3 pt-5 shadow-lg"
      style={{
        position: "absolute",
        top: `calc(${y}px + 2rem)`,
        left: `calc(${x}px - 1rem)`,
      }}
    >
      <div className="mb-3 w-1/2 flex-shrink-0 rounded-[6px] bg-[#FFF1F0]">
        <p className="text-[13px] font-semibold leading-[22px] text-[#E5372B]">
          Lorem Ipsum Dolor Sit{" "}
        </p>
      </div>
      <div className="mb-3 ml-[50px] grid grid-cols-3 gap-[3px]">
        {["1.2.3.4", "1.2.3.4", "1.2.3.4", "1.2.3.4", "1.2.3.4", "1.2.3.4"].map(
          (item, index) => (
            <div
              key={index}
              className="min-w-[106px] rounded-[6px] bg-[#FFF1F0]"
            >
              <p className="text-[13px] font-semibold leading-[22px] text-[#E5372B]">
                {item}
              </p>
            </div>
          ),
        )}
      </div>
      <div className="rounded-6 w-fit rounded-[5px] bg-[#F2EDFF] px-1 py-0.5">
        <p className="text-[13px] font-semibold leading-[22px] text-[#6236CC]">
          Lorem: 1.2.3.4
        </p>
      </div>
    </div>
  );
};

export const OverlayOne = () => {
  const { x, y } = useMousePosition();

  if (x === 0 || y === 0) return;

  return (
    <div
      className="w-max text-nowrap rounded-[20px] bg-white px-[30px] pb-3 pt-5 shadow-lg"
      style={{
        position: "absolute",
        top: `calc(${y}px + 2rem)`,
        left: `calc(${x}px - 1rem)`,
      }}
    >
      <div className="flex items-center gap-[14px]">
        <div className="flex items-center justify-center rounded-full bg-brand-blue-faded p-3">
          <IconServer />
        </div>
        <div>
          <p className="text-sm font-semibold text-secondary">Loremipsu </p>
        </div>
      </div>

      <div className="mt-2.5 flex items-center gap-2.5">
        <div className="flex items-center gap-2">
          <IconFile />
          <p className="text-base font-bold text-[#525D73]">
            Lorem: Loremipsum Loremipsum
          </p>
        </div>
        <div className="w-fit rounded-[6px] bg-[#F2EDFF] px-1 py-0.5">
          <p className="text-[13px] font-semibold leading-[22px] text-[#6236CC]">
            1.2.3.4
          </p>
        </div>
      </div>

      <div className="mt-2.5 flex items-center gap-2.5">
        <div className="w-fit rounded-[6px] bg-[#F2EDFF] px-1 py-0.5">
          <p className="text-[13px] font-semibold leading-[22px] text-[#6236CC]">
            1.2.3.4
          </p>
        </div>
        <p className="text-base font-bold text-[#525D73]">Loremipsum</p>
        <div className="w-fit rounded-[6px] bg-[#F2EDFF] px-1 py-0.5">
          <p className="text-[13px] font-semibold leading-[22px] text-[#6236CC]">
            1.2.3.4
          </p>
        </div>
        <div className="w-fit rounded-[6px] bg-[#F2EDFF] px-1 py-0.5">
          <p className="text-[13px] font-semibold leading-[22px] text-[#6236CC]">
            1.2.3.4
          </p>
        </div>
      </div>
    </div>
  );
};
export const OverlayTwo = () => {
  const { x, y } = useMousePosition();

  if (x === 0 || y === 0) return;

  return (
    <div
      className="w-max text-nowrap rounded-[20px] bg-white px-[30px] pb-3 pt-5 shadow-lg"
      style={{
        position: "absolute",
        top: `calc(${y}px + 2rem)`,
        left: `calc(${x}px - 1rem)`,
      }}
    >
      <div className="flex items-center gap-[14px]">
        <div className="flex items-center justify-center rounded-full bg-brand-blue-faded p-3">
          <IconServer />
        </div>
        <div>
          <p className="text-sm font-semibold text-secondary">Loremipsum</p>
        </div>
      </div>

      <div className="mt-2.5 flex items-center gap-2">
        <IconFile />
        <p className="text-base font-bold text-[#525D73]">Lorem:</p>
        <div className="rounded-[6px] bg-[#FFF9ED] px-2 py-0.5">
          <p className="text-nowrap text-[13px] font-semibold leading-[22px] text-[#EBA622]">
            Lorem &quot;ipsum&quot;
          </p>
        </div>
        <div className="rounded-[6px] bg-[#E9FAF0] px-2 py-0.5">
          <p className="text-[13px] font-semibold leading-[22px] text-[#02983E]">
            Lorem
          </p>
        </div>
        <p className="text-base font-bold text-[#525D73]">
          Loremipsum Loremipsum
        </p>
      </div>
      <div className="mt-2.5 flex items-center gap-2.5">
        <div className="w-fit rounded-[6px] bg-[#F2EDFF] px-1 py-0.5">
          <p className="text-[13px] font-semibold leading-[22px] text-[#6236CC]">
            1.2.3.4
          </p>
        </div>
        <p className="text-base font-bold text-[#525D73]">Loremipsum</p>
        <div className="w-fit rounded-[6px] bg-[#F2EDFF] px-1 py-0.5">
          <p className="text-[13px] font-semibold leading-[22px] text-[#6236CC]">
            1.2.3.4
          </p>
        </div>
        <div className="w-fit rounded-[6px] bg-[#F2EDFF] px-1 py-0.5">
          <p className="text-[13px] font-semibold leading-[22px] text-[#6236CC]">
            1.2.3.4
          </p>
        </div>
        <div className="rounded-[6px] bg-[#ECF5FF] px-2 py-0.5">
          <p className="text-[13px] font-semibold leading-[22px] text-[#0053B5]">
            Lorem 1234,5678
          </p>
        </div>
      </div>
      <div className="mt-2.5 flex items-center gap-2">
        <IconFile />
        <p className="text-base font-bold text-[#525D73]">Lorem:</p>
        <div className="rounded-[6px] bg-[#FFF9ED] px-2 py-0.5">
          <p className="text-[13px] font-semibold leading-[22px] text-[#EBA622]">
            Lorem &quot;ipsum&quot;
          </p>
        </div>
        <p className="text-base font-bold text-[#525D73]">
          Loremipsum Loremipsum
        </p>
      </div>
      <div className="mt-2.5 flex items-center gap-2">
        <div className="w-fit rounded-[6px] bg-[#F2EDFF] px-1 py-0.5">
          <p className="text-[13px] font-semibold leading-[22px] text-[#6236CC]">
            1.2.3.4
          </p>
        </div>
        <div className="w-fit rounded-[6px] bg-[#F2EDFF] px-1 py-0.5">
          <p className="text-[13px] font-semibold leading-[22px] text-[#6236CC]">
            1.2.3.4
          </p>
        </div>
        <p className="text-base font-bold text-[#525D73]">Loremipsum</p>
        <p className="text-base font-bold text-[#525D73]">Loremipsum</p>{" "}
        <div className="w-fit rounded-[6px] bg-[#F2EDFF] px-1 py-0.5">
          <p className="text-[13px] font-semibold leading-[22px] text-[#6236CC]">
            1.2.3.4
          </p>
        </div>
        <div className="w-fit rounded-[6px] bg-[#F2EDFF] px-1 py-0.5">
          <p className="text-[13px] font-semibold leading-[22px] text-[#6236CC]">
            1.2.3.4
          </p>
        </div>
      </div>
    </div>
  );
};

export const OverlayThree = () => {
  const { x, y } = useMousePosition();

  if (x === 0 || y === 0) return;

  return (
    <div
      className="w-max text-nowrap rounded-[20px] bg-white px-[30px] pb-3 pt-5 shadow-lg"
      style={{
        position: "absolute",
        top: `calc(${y}px - 3rem)`,
        left: `calc(${x}px - 20rem)`,
      }}
    >
      <div className="flex items-center gap-[14px]">
        <div className="relative flex items-center justify-center rounded-full bg-brand-blue-faded p-3">
          <div
            className={`absolute -right-2 -top-3 flex items-center justify-center rounded-full border border-white bg-brand-red p-1`}
          >
            <IconShieldX />
          </div>
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
      </div>

      <div className="mt-2.5 flex items-center gap-2.5">
        <div className="flex items-center gap-2">
          <IconFile />
          <p className="text-base font-bold text-[#525D73]">Lorem:</p>
        </div>
        <div className="min-w-[106px] rounded-[6px] bg-[#FFF9ED]">
          <p className="text-[13px] font-semibold leading-[22px] text-[#EBA622]">
            Lorem &quot;ipsum&quot;
          </p>
        </div>
      </div>

      <div className="mt-2.5 flex items-center gap-2.5">
        <p className="text-base font-bold text-[#525D73]">Loremipsum</p>
        <div className="min-w-[106px] rounded-[6px] bg-[#ECF5FF] px-2 py-0.5">
          <p className="text-[13px] font-semibold leading-[22px] text-[#0053B5]">
            Lorem 1234,5678
          </p>
        </div>
      </div>
    </div>
  );
};

export const OverlayFour = () => {
  const { x, y } = useMousePosition();

  if (x === 0 || y === 0) return;

  return (
    <div
      className="w-max text-nowrap rounded-[20px] bg-white px-[30px] pb-3 pt-5 shadow-lg"
      style={{
        position: "absolute",
        top: `calc(${y}px - 3rem)`,
        left: `calc(${x}px - 20rem)`,
      }}
    >
      <div className="flex items-center gap-[14px]">
        <div className="relative flex items-center justify-center rounded-full bg-brand-blue-faded p-3">
          <div
            className={`absolute -right-2 -top-3 flex items-center justify-center rounded-full border border-white bg-brand-red p-1`}
          >
            <IconShieldX />
          </div>
          <IconServer />
        </div>
        <div>
          <p className="text-sm font-semibold text-secondary">
            Loremipsumdolorsit002
          </p>
          <p className="text-xs font-semibold text-secondary-muted">
            192.168.1.2
          </p>
        </div>
      </div>

      <div className="mt-2.5 flex items-center gap-2.5">
        <div className="flex items-center gap-2">
          <IconFile />
          <p className="text-base font-bold text-[#525D73]">Lorem:</p>
        </div>
        <div className="min-w-[106px] rounded-[6px] bg-[#FFF9ED]">
          <p className="text-[13px] font-semibold leading-[22px] text-[#EBA622]">
            Lorem &quot;ipsum&quot;
          </p>
        </div>
      </div>

      <div className="mt-2.5 flex items-center gap-2.5">
        <p className="text-base font-bold text-[#525D73]">Loremipsum</p>
        <div className="min-w-[106px] rounded-[6px] bg-[#ECF5FF] px-2 py-0.5">
          <p className="text-[13px] font-semibold leading-[22px] text-[#0053B5]">
            Lorem 1234,5678
          </p>
        </div>
      </div>
    </div>
  );
};
