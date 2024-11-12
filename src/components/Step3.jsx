import React from "react";
import demo from "./../assets/ai-image.jpg";

const Step3 = () => {
  return (
    <div className="md:sticky md:top-16  border-t border-[#d3e5e9] rounded-t-[4vw] h-[90vh] max-h-[53rem] px-10  md:px-36 py-4 bg-slate-50">
      <div className="flex flex-col gap-y-8">
        <div className=" inline-block font-semibold">Step 3</div>
        <div className="grid gap-12 flex-1 grid-rows-[auto] grid-cols-2 auto-cols-fr place-items-center h-[70%] pt-0 pb-0">
          <div className="flex flex-col gap-8 justify-center items-stretch mb-24">
            Text
          </div>
          <div className=" w-[27rem] ">
            <img src={demo} alt="" className=" rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
