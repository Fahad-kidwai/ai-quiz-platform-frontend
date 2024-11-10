import React from "react";
import { Container } from ".";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex flex-row space-y-2 h-[88vh] px-20 py-4 bg-slate-50 rounded-b-[40px]">
      <div className=" max-w-3xl flex flex-col justify-center space-y-2">
        <h1 className=" font-serif text-xl md:text-4xl">
          Create Your Own Quiz Adventure with AI
        </h1>
        <p className=" text-base md:text-2xl font-mono text-justify ">
          Tired of the same old trivia nights? Ready to elevate your game nights
          and virtual gatherings? Our AI-powered quiz platform is your ultimate
          solution. With just a few clicks, you can create personalized quizzes
          tailored to any topic, from history and science to pop culture and
          sports. No more boring icebreakers or stale conversations. Let our
          intelligent system generate unique, challenging, and fun quizzes that
          will keep your guests engaged and entertained for hours
        </p>
        <Button className="w-36 rounded-2xl">Explore</Button>
      </div>
    </div>
  );
};

export default Hero;
