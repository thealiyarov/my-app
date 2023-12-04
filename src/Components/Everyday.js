import React from "react";
import Launched from "../Assets/LaunchedProjects.png";

function Everyday() {
  return (
    <div className="w-[1505px] h-[540px] flex items-center justify-center ml-[200px] bg-[#FBFAFE] border-solid border-[1px] border-[#F0EBFA] ">
      <div className="flex flex-col items-start justify-start w-[413px] h-[276px] mr-[90px] ">
        <h1 className="text-[40px] font-semibold text-left leading-[48px]">We work how you work everyday</h1>
        <h2 className="text-[16px] font-medium text-left leading-[24px] mt-[24px] mb-[32px]">
          Since the easiest things to use actually get used, we adapts to the
          way your team works – not the other way around.
        </h2>
        <button className="w-[164px] h-[52px] bg-[#796EFF] rounded-[4px] text-[#FFFFFF] ">Get started free</button>
      </div>
      <div className="w-[597px] h-[405px] ">
        <img src={Launched} alt="" />
      </div>
    </div>
  );
}

export default Everyday;
