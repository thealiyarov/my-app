import React from "react";
import GooglePlayBlack from "../Assets/GooglePlayBlack.png";
import AppStoreBlack from "../Assets/AppStoreBlack.png";
import Media1 from "../Assets/Media1.png";
import Media2 from "../Assets/Media2.png";
import Media3 from "../Assets/Media3.png";
import Media4 from "../Assets/Media4.png";

function Footer() {
  return (
    <div className="Footer flex mx-auto w-[1505px]  h-[417px] bg-[#1D2830] mt-[100px] ">
      <div className="FooterMain mt-[80px]">
        <div className="FooterText w-[1031px] h-[176px] flex items-start ml-[198px] text-[16px] font-thin leading-[16px] text-white gap-[180px] ">
          <div className="Company">
            <ul className="text-[16px] leading-[24px] flex flex-col gap-[24px] text-left">
              <li className="text-[16px] font-semibold leading-[16px] ">
                Company
              </li>
              <li className="text-left text-[16px] font-light leading-[16px]">
                About Us
              </li>
              <li className="text-left text-[16px] font-light leading-[16px]">
                Blog
              </li>
              <li className="text-left text-[16px] font-light leading-[16px]">
                Careers
              </li>
              <li className="text-left text-[16px] font-light leading-[16px]">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="Support">
            <ul className="text-[16px] leading-[24px] flex flex-col gap-[24px] text-left">
              <li className="text-[16px] font-semibold leading-[24px] text-left">
                Support
              </li>
              <li className="text-left text-[16px] font-light leading-[16px]">
                Help Center
              </li>
              <li className="text-left text-[16px] font-light leading-[16px]">
                Safety Center
              </li>
              <li className="text-left text-[16px] font-light leading-[16px]">
                Community
              </li>
            </ul>
          </div>
          <div className="Legal">
            <ul className="text-[16px] leading-[24px] flex flex-col gap-[24px] text-left">
              <li className="text-[16px] font-semibold leading-[24px] text-left">
                Legal
              </li>
              <li className="text-left text-[16px] font-light leading-[16px]">
                Cookies Policy
              </li>
              <li className="text-left text-[16px] font-light leading-[16px]">
                Privacy Policy
              </li>
              <li className="text-left text-[16px] font-light leading-[16px]">
                Terms of Service
              </li>
            </ul>
          </div>
          <div className="InstallApp">
            <ul className="InstallApp text-[16px] leading-[24px] flex flex-col gap-[24px] text-left ">
              <li className="text-[16px] font-semibold leading-[24px] text-left">
                Install App
              </li>
              <li>
                <img src={GooglePlayBlack} alt="" />
              </li>
              <li>
                <img src={AppStoreBlack} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-[1px] mt-[80px] w-[1505px] ">
        <div className="FooterEnd flex  w-[2095px] ml-[15px] h-[32px] mt-[24px]   items-center  ">
          <div className="AllRights w-[540px]">
            <h1 className="text-white text-[14px] font-light leading-[14px]  ">
              © 2020 - All rights reserved
            </h1>
          </div>
          <div className="SocialMedias flex ml-[515px] gap-[24px] ">
            <img src={Media1} alt="" />
            <img src={Media2} alt="" />
            <img src={Media3} alt="" />
            <img src={Media4} alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
