export const OverlayZero = ({
  position,
}: {
  position: { x: number; y: number };
}) => {
  return (
    <div
      className="rounded-[20px] bg-white px-[30px] pb-3 pt-5 shadow-lg"
      style={{
        position: "absolute",
        top: `${position.y + 180}px`,
        left: `${-position.x + 50}px`,
      }}
    >
      <div className="min-w-1/2 mb-3 rounded-[6px] bg-[#FFF1F0]">
        <p className="text-[13px] font-semibold leading-[22px] text-[#E5372B]">
          Lorem Ipsum Dolor Sit{" "}
        </p>
      </div>
      <div className="mb-3 grid grid-cols-3 gap-[3px] pl-[50px]">
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
      <div className="rounded-6 w-fit rounded-full bg-[#F2EDFF] px-1 py-0.5">
        <p className="text-[13px] font-semibold leading-[22px] text-[#6236CC]">
          Lorem: 1.2.3.4
        </p>
      </div>
    </div>
  );
};

export const OverlayOne = ({
  position,
}: {
  position: { x: number; y: number };
}) => {
  return (
    <div
      className={`absolute bg-red-500`}
      style={{ top: `${position.y + 180}px`, left: `${position.x}px` }}
    ></div>
  );
};

export const OverlayTwo = ({
  position,
}: {
  position: { x: number; y: number };
}) => {
  return (
    <div
      className={`absolute bg-red-500`}
      style={{ top: `${position.y + 180}px`, left: `${position.x}px` }}
    ></div>
  );
};

export const OverlayThree = ({
  position,
}: {
  position: { x: number; y: number };
}) => {
  return (
    <div
      className={`absolute bg-red-500`}
      style={{ top: `${position.y + 180}px`, left: `${position.x}px` }}
    ></div>
  );
};

export const OverlayFour = ({
  position,
}: {
  position: { x: number; y: number };
}) => {
  return (
    <div
      className={`absolute bg-red-500`}
      style={{ top: `${position.y + 180}px`, left: `${position.x}px` }}
    ></div>
  );
};
