import React from 'react'
import google from "../Assets/google.png";
import airbnb from "../Assets/airbnb.png";
import facebook from "../Assets/facebook.png";
import hubspot from "../Assets/hubspot.png";
import slack from "../Assets/slack.png";

function BestTeam() {
  return (
    <div className='flex flex-col justify-center items-center mr-[-30px]'>
        <h3 className='text-[16px]'>TRUSTED BY OVER <b>10.000+</b> WORLD’S BEST TEAMS</h3>
        <div className='flex gap-[130px] mt-[30px] w-[942px] h-[27px] '>
        <img src={google} alt="" />
        <img src={airbnb} alt="" />
        <img src={facebook} style={{ width: '80px' }} alt="" />
        <img src={hubspot} alt="" />
        <img src={slack} alt="" />
        </div>
    </div>
  )
}

export default BestTeam