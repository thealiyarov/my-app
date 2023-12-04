import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function MainTop() {
  return (
    <div className='flex items-center  gap-[8px] mx-auto bg-[#F2F9EB] rounded-[100px] w-[290px] mt-[100px]'>
        <div className='flex items-center justify-center save w-[108px] h-[32px] rounded-[100px] bg-[#81C43B] cursor-pointer'>Save 90%</div>
        <div className='flex items-center justify-center gap-1 get w-[160.73px] h-[32px] cursor-pointer'>Get account of $59 <FontAwesomeIcon icon={faAngleDown} rotation={270}  className="w-[10px] h-[10px] " /></div>


    </div>
  )
}

export default MainTop