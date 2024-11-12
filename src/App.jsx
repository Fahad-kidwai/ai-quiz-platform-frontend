import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header, Step1, Step2, Step3 } from "./components";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-[#232323]">
      <div className="w-full min-h-screen block">
        <Header />
        <main className="">
          <Hero />
          <Step1 />
          <Step2 />
          <Step3 />
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
