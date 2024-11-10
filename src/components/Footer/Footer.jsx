import React from "react";
// import { a } from "react-router-dom";
// import { Container } from "../index";

const Footer = () => {
  return (
    <section className=" relative w-full overflow-hidden py-10 bg-[#E5E6E1] rounded-t-[40px] ">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">Quiz</div>
              <div>
                <p className="text-sm  ">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase  ">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium  hover:"
                    to="/"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium  hover:"
                    to="/"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium  hover:"
                    to="/"
                  >
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a
                    className=" text-base font-medium  hover:"
                    to="/"
                  >
                    Press Kit
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase  ">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium  hover:"
                    to="/"
                  >
                    Account
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium  hover:"
                    to="/"
                  >
                    Help
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium  hover:"
                    to="/"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    className=" text-base font-medium  hover:"
                    to="/"
                  >
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase  ">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium  hover:"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium  hover:"
                    to="/"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className=" text-base font-medium  hover:"
                    to="/"
                  >
                    Licensing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
