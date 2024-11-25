import React from "react";
import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import Footer from "@/app/component/Footer";
import Fulllengthpaper from "../component/Fulllengthpaper";
import Marquees from "../component/Marquees";

const page = () => {
  return (
    <div className="bg-white h-screen">
      <TopInfo />
      <NavBar />
      <Marquees />
      <Fulllengthpaper/>
      <Footer />
    </div>
    
  );
};

export default page;
