import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-[#e4e4e3]">
      <div className="w-full min-h-screen block">
        <Header />
        <main className="">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
