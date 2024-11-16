import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";

const QuizForm = () => {
  const [formData, setFormData] = useState({
    topic: "",
    difficulty: "",
    questionCount: 10,
  });

  const [errors, setErrors] = useState({
    topic: "",
    difficulty: "",
    questionCount: "",
  });

  const validate = () => {
    let valid = true;
    const newErrors = { topic: "", difficulty: "", questionCount: "" };

    if (!formData.topic) {
      newErrors.topic = "Please select a topic.";
      valid = false;
    }
    if (!formData.difficulty) {
      newErrors.difficulty = "Please select a difficulty level.";
      valid = false;
    }
    if (!formData.questionCount || isNaN(Number(formData.questionCount))) {
      newErrors.questionCount = "Please enter a valid question count.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully:", formData);
      // Submit the form data
    }
  };

  return (
    <div className="w-full max-w-[30rem] py-6 sm:py-8 mx-auto px-4 sm:px-6 rounded-xl bg-[#E5E6E1] border-slate-300">
      <h1 className=" text-2xl font-semibold mb-2">Start Quizzing</h1>
      <div className="flex flex-col gap-34 sm:gap-4 items-center">
        <div className="w-full max-w-sm px-4">
          <Label className="mb-2 block">Topic</Label>
          <Input
            className="w-full"
            placeholder="Enter a topic"
            value={formData.topic}
            onChange={(e) => handleChange("topic", e.target.value)}
          />
          <p className="text-sm text-red-500 mt-1">{errors.topic}</p>
        </div>

        <div className="w-full max-w-sm px-4">
          <Label className="mb-2 block">Difficulty</Label>
          <Select
            value={formData.difficulty}
            onValueChange={(value) => handleChange("difficulty", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-red-500 mt-1">{errors.difficulty}</p>
        </div>

        <div className="w-full max-w-sm px-4">
          <Label className="mb-2 block">Question Count</Label>
          <Input
            type="number"
            className="w-full"
            placeholder="Enter the number of questions"
            value={formData.questionCount}
            onChange={(e) => handleChange("questionCount", e.target.value)}
          />
          <p className="text-sm text-red-500 mt-1">{errors.questionCount}</p>
        </div>

        <div className="w-full max-w-sm px-4">
          <Button variant="submit" onClick={handleSubmit} className="w-full">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizForm;
