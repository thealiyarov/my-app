import React from "react";

function Maincenter() {
  return (
    <div className="Maincenter w-[760px] h-[300px] font-semibold mx-auto mt-[24px] mb-[48px]">
      <h1 className="text-[64px] w-[780px] h-[160px] ">
        Manage the team everyone wants do be on
      </h1>
      <h4 className="font-normal mx-auto mt-[50px] my-auto w-[505px] h-[48px]">
        Simple platform that lets you master what great managers do best, as
        develop trust, collaborate, and drive team performance.
      </h4>
      <div className="flex items-center justify-end mr-[-103px] mt-[24px]">
      <form
        action=""
        className="flex items-center justify-center border-solid border-[1px] w-[486px] h-[52px] rounded-[4px] "
      >
        <input
          type="text"
          placeholder="name@yourcompany.com"
          className="pl-6 w-[322px] h-[52px]   border-[#97A5B5]"
        />
        <button
          typeof="submit"
          className="w-[164px] h-[52px] bg-[#794CFF] text-white"
        >
          Try it free
        </button>
      </form>
      </div>
    </div>
  );
}

export default Maincenter;
