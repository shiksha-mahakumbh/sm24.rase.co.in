import React from "react";
import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import Footer from "@/app/component/Footer";
import Panelists from "../component/Panelists";
import Marquees from "../component/Marquees";

const page = () => {
  return (
    <div className="bg-white min-h-screen">
      <TopInfo />
      <NavBar />
      <Marquees />
      <div className="p-4">
      <Panelists />
      </div>
      <Footer />
    </div>
    
  );
};

export default page;
