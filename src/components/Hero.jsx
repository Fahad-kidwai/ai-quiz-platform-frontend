import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import im from "./../assets/ai-image.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-4 justify-around items-center mb-[2px]  h-full sm:h-[88vh] px-10  md:px-36 py-4 bg-slate-50 rounded-b-[40px]">
      <div className=" max-w-xl flex flex-col justify-center space-y-5">
        <h1 className=" font-serif text-xl md:text-5xl">
          Create Your Own Quiz Adventure with AI
        </h1>
        <p className=" text-base md:text-2xl font-mono text-justify ">
          Tired of the same old trivia nights? Ready to elevate your game nights
          and virtual gatherings? Our AI-powered quiz platform is your ultimate
          solution.
        </p>
        <Link to="/quiz-form">
          <Button size="round" className="">
            Get started →
          </Button>
        </Link>
      </div>
      <div className="px-4  max-w-[27rem]">
        <img src={im} alt="" className=" rounded-xl" />
      </div>
    </div>
  );
};

export default Hero;
