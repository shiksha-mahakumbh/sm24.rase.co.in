import React from "react";
import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import Footer from "@/app/component/Footer";
import AbstractSubmission from "../component/AbstractSubmission";

const page = () => {
  return (
    <div className="bg-white h-screen">
      <TopInfo />
      <NavBar />
      <AbstractSubmission/>
      <Footer />
    </div>
    
  );
};

export default page;
