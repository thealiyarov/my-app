import React from "react";
import Make1 from "../Assets/Make1.png";
import Make2 from "../Assets/Make2.png";
import Make3 from "../Assets/Make3.png";
import Make4 from "../Assets/Make4.png";
import Make5 from "../Assets/Make5.png";
import Make6 from "../Assets/Make6.png";

function Makework() {
  return (
    <div className="flex flex-col items-center justify-center w-[1110px] ml-[410px]  mt-[100px]">
      <h1 className="text-[40px] font-semibold ">Make your work easier</h1>
      <div className="grid grid-cols-3 w-[1110px] h-[404px] ">
        <div className="flex flex-col items-start justify-start gap-3 h-[162px] w-[306px]">
          <img src={Make1} alt="" />
          <div className="flex flex-col items-start justify-start w-[306px] h-[74px] gap-2">
            <h1 className="text-[18px] font-semibold">
              Team Surveys & Reports
            </h1>
            <h2 className="text-left text-[16px] font-medium">
              Short, anonymous surveys track your team’s needs weekly so you can
              focus.
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-3  ml-[120px] h-[162px] w-[306px]">
          <img src={Make2} alt="" />
          <div className="flex flex-col items-start justify-start w-[306px] h-[74px] gap-2">
            <h1 className="text-[18px] font-semibold">Collaborative 1:1 </h1>
            <h2 className="text-left text-[16px] font-medium">
              Build relationships by planning 1-on-1s and start meetings.
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-3  ml-[120px] h-[162px] w-[306px]">
          <img src={Make3} alt="" />
          <div className="flex flex-col items-start justify-start w-[306px] h-[74px] gap-2">
            <h1 className="text-[18px] font-semibold">Learning Center</h1>
            <h2 className="text-left text-[16px] font-medium">
              Quickly get solutions tailored to your personal challenges from
              the manager.
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-3  h-[162px] w-[306px]">
          <img src={Make4} alt="" />
          <div className="flex flex-col items-start justify-start w-[306px] h-[74px] gap-2">
            <h1 className="text-[18px] font-semibold">Anonymous Messaging</h1>
            <h2 className="text-left text-[16px] font-medium">
              Develop trust in a safe channel for important conversations.
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-3  ml-[120px] h-[162px] w-[306px]">
          <img src={Make5} alt="" />
          <div className="flex flex-col items-start justify-start w-[306px] h-[74px] gap-2">
            <h1 className="text-[18px] font-semibold">Conversation Engine</h1>
            <h2 className="text-left text-[16px] font-medium">
              Communicate confidently with recommended talking points.
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-3  ml-[120px] h-[162px] w-[306px]">
          <img src={Make6} alt="" />
          <div className="flex flex-col items-start justify-start w-[306px] h-[74px] gap-2">
            <h1 className="text-[18px] font-semibold">Exclusives Manager</h1>
            <h2 className="text-left text-[16px] font-medium">
              Access manager tips, activities and best practices from our team
              of experts.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Makework;
