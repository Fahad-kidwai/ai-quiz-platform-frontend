import { QuizForm } from "@/components";
import React from "react";

const FormQuiz = () => {
  return (
    <div className="w-full bg-primary-foreground border-b h-screen md:max-h-[88vh] border-[#d3e5e9] rounded-b-[4vw] p-4 sm:p-6 md:p-8 lg:px-36">
      <div className="flex justify-center items-center h-full w-full">
        <QuizForm />
      </div>
    </div>
  );
};

export default FormQuiz;
