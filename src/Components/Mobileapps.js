import React from "react";
import GooglePlay from '../Assets/GooglePlay.png'
import AppStore from '../Assets/AppStore.png'

function Mobileapps() {
  return (
    <div className="flex items-center justify-center mt-[100px]">
      <div className="flex justify-evenly items-center w-[1110px] h-[224px] rounded-[16px] bg-[#796EFF] ">
        <div className="MobileApps-left">
          <h1 className="text-left text-[32px] font-semibold leading-[48px] text-[#FFFFFF] w-[423px] h-[96px] ">
            84% of employees who use trust their direct manager
          </h1>
        </div>
        <div className="MobileApps-right flex gap-[24px]">
            <img src={GooglePlay} alt="" />
            <img src={AppStore} alt="" />
          </div>
      </div>
    </div>
  );
}

export default Mobileapps;
