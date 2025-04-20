import { useEffect, useRef } from "react";

const CustomProgressBar = ({ current, max, title, unit = "" }: any) => {
  const bar = useRef<any>(0);
  const calcPercent = (current: any, max: any) => {
    try {
      if (max <= 0 || !max) return "";
      const percent = ((current * 100) / max).toFixed(2);
      bar.current.style.width = `${percent}%`;
      return `${percent}%`;
    } catch (ex) {}
    return "";
  };
  useEffect(() => {
    calcPercent(current, max);
  }, [current, max]);
  return (
    <div className="p-2">
      <div className="text-sm flex justify-between text-black font-semibold">
        <span className="">{title}</span>
        <div className="flex text-[#D30B0B]">
          {/* <div>{calcPercent(current, max)}</div> */}
          <div>{Number(max).toLocaleString("en-US")}</div>
          {/* <div>
            {`(${current}`}/{Number(max).toLocaleString("en-US")}
            {unit}
            {`)`}
          </div> */}
        </div>
      </div>
      <div className="mt-2 text-sm flex justify-between mb-2">
        <div className="w-full bg-[#E3F0FF] h-2 rounded-full">
          <div
            ref={bar}
            className=" h-full bg-[#FF4747] rounded-full max-w-full"
          ></div>
        </div>
      </div>
    </div>
  );
};
export default CustomProgressBar;
