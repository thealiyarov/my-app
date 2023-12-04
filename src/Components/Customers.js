import React from "react";
import Customer1 from '../Assets/Customer1.png'
import Customer2 from '../Assets/Customer2.png'
import Customer3 from '../Assets/Customer3.png'

function Customers() {
  return (
    <div className="w-[543px] mt-[100px] mx-auto">
      <div className="Customer Main">
      <div className="w-[543px] h-[240px] ">
      <h1 className="w-[394px] h-[96px] mx-auto text-[40px] font-semibold leading-[48px] ">Why customers love working with us</h1>
      <h2 className="text-center text-[16px] font-medium leadeing-[32px] mt-[48px] ">
        “It's amazing what has helped me learn about my team. <br/>I don't worry
        about blindspots anymore, and 1-on-1s have never been more productive.
        The team loves it.”
      </h2>
      </div>
      </div>
      <div className="Custumers flex items-center justify-center gap-[90px] mt-[48px]">
      <div className="w-[938px] h-[76px] ">
        <div className="w-[254px] h-[76px] border-t-4 border-[#35414B] border-solid flex items-center justify-center gap-[16px]">
            <img src={Customer1} alt="" />
            <div>
                <h1 className="text-left text-[18px] font-semibold leading-[16px] text-[#4E5A65] " >Jorge Robertson</h1>
                <h2 className="text-left text-[16px] font-medium leading-[16px] mt-[8px] text-[#4E5A65]">CS at Google</h2>
            </div>
        </div>
        <div></div>
        <div></div>

      </div>
      <div className="w-[938px] h-[76px] ">
        <div className="w-[254px] h-[76px] pt-[4px]  flex items-center justify-center gap-[16px]">
            <img src={Customer2} alt="" />
            <div>
                <h1 className="text-left text-[18px] font-semibold leading-[16px] text-[#4E5A65] " >Francisco Bell</h1>
                <h2 className="text-left text-[16px] font-medium leading-[16px] mt-[8px] text-[#4E5A65]">Designer at Microsoft</h2>
            </div>
        </div>
      </div>
      <div className="w-[938px] h-[76px] ">
        <div className="w-[254px] h-[76px] pt-[4px]  flex items-center justify-center gap-[16px]">
            <img src={Customer3} alt="" />
            <div>
                <h1 className=" text-left text-[18px] font-semibold leading-[16px] text-[#4E5A65] " >Beth Fox</h1>
                <h2 className="text-left text-[16px] font-medium leading-[16px] mt-[8px] text-[#4E5A65]">Developer at Airbnb</h2>
            </div>
        </div>
        

      </div>
      </div>
    </div>
  );
}

export default Customers;
