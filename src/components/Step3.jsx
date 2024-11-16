import React from "react";
import demo from "./../assets/ai-image.jpg";

const Step3 = () => {
  return (
    <div className="min-h-screen md:min-h-[90vh] md:max-h-[53rem] bg-slate-50 border-t border-[#d3e5e9] rounded-t-[4vw] rounded-b-[4vw] px-4 sm:px-6 md:px-12 lg:px-36 py-4 md:sticky md:top-15">
      <div className="flex flex-col gap-4 md:gap-8 h-full">
        <div className="inline-block font-semibold text-lg md:text-xl">
          Step 3
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-12 h-full items-center justify-center">
          {/* Text Content */}
          <div className="flex flex-col gap-4 md:gap-8 justify-center items-stretch w-full order-2 lg:order-1 mb-8 lg:mb-24">
            <p className="text-base md:text-lg">Text</p>
          </div>

          {/* Image Container */}
          <div className="w-full max-w-xl lg:w-[27rem] order-1 lg:order-2">
            <img
              src={demo}
              alt="Step 3 visualization"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;