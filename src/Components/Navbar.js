import React from "react";
import image from "../Assets/team.flow.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center mx-auto mt-[48px] w-[1109px] h-[48px]">
      <div className="Nav-left ">
        <img src={image} alt="teamflow" />
      </div>
      <div className="nav-right flex items-center justify-center w-[784px] ml-[233px]">
        <div className="Nav-right-center  w-[459px]">
          <ul className="flex items-center justify-center gap-[40px]">
          <li className="flex items-center justify-center gap-1 cursor-pointer">How it works <FontAwesomeIcon icon={faAngleDown}  className="w-[10px] h-[10px] " /></li>
            <li className="flex items-center justify-center gap-1 cursor-pointer">Product <FontAwesomeIcon icon={faAngleDown}  className="w-[10px] h-[10px] " /></li>
            <li className="cursor-pointer">Pricing</li>
            <li className="flex items-center justify-center gap-1 cursor-pointer">Resources <FontAwesomeIcon icon={faAngleDown}  className="w-[10px] h-[10px] " /></li>
            
          </ul>
        </div>
        <div className="Nav-right-right  ml-[90px]">
          <ul className="flex items-center justify-center gap-[16px]">
            <li className="cursor-pointer">Log in</li>
            <li className="cursor-pointer w-[168px] h-[48px] bg-[#ECE5FF] font-semibold text-[#794CFF] rounded-[4px] flex items-center justify-center ">
              Get started free
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
