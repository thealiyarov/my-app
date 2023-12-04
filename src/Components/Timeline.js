import React from 'react'
import Timelineimg from '../Assets/Timeline.png'
import Timelineimg2 from '../Assets/Timeline2.png'

function Timeline() {
  return (
    <div className='flex ml-[211px] mt-[101px] w-[1505px] h-[640px] bg-[#FBFAFE] border-solid border-[1px] border-[#F0EBFA] '>
        <div className='Timeline flex'>
            <div className='Lineleft ml-[198px] mt-[61px] '>
                <img src={Timelineimg} alt=""/>
            </div>
            <div className='Lineright mt-[77px] ml-[80px] '>
                <img src={Timelineimg2} alt="" />
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Timeline