import React from "react";
import { useTime } from "../hook/useTime";

export const Watch = () => {
  const { time, rotate } = useTime();

  return (
    <div className="h-full max-h-[300px] w-full max-w-[300px]">
      <div
        className="relative h-full w-full rotate-[270deg] rounded-full"
        style={{
          boxShadow:
            "inset -18px -18px 30px #d1d9e6, inset 18px 18px 30px #fff",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ boxShadow: "-18px -18px 30px #d1d9e6, 18px 18px 30px #fff" }}
        >
          <span
            className="absolute top-1/2 left-1/2 w-1/2 origin-left before:absolute before:left-[103%] before:top-1/2 before:h-[40px] before:w-[40px] before:-translate-y-1/2 before:rounded-full before:bg-tomato"
            style={{ rotate: `${rotate.hourDeg}deg` }}
          />
          <span
            className="absolute top-1/2 left-1/2 w-1/2 origin-left before:absolute before:left-[103%] before:top-1/2 before:h-[30px] before:w-[30px] before:-translate-y-1/2 before:rounded-full before:bg-teal"
            style={{ rotate: `${rotate.minuteDeg}deg` }}
          />
          <span
            className="absolute top-1/2 left-1/2 w-1/2 origin-left before:absolute before:left-[103%] before:top-1/2 before:h-[20px] before:w-[20px] before:-translate-y-1/2 before:rounded-full before:bg-gold"
            style={{ rotate: `${rotate.secondDeg}deg` }}
          />
          <div className="flex h-full w-full rotate-90 items-center justify-center text-[20px] font-bold text-gray-400">
            {time.format("hh:mm:ss A")}
          </div>
        </div>
      </div>
    </div>
  );
};
