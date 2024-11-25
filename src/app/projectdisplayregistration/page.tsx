import React from "react";
import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import Footer from "@/app/component/Footer";
import ProjectDisplaySubmission from "../component/ProjectDisplaySubmission";

const page = () => {
  return (
    <div className="bg-white min-h-screen">
      <TopInfo />
      <NavBar />
      <ProjectDisplaySubmission />
      <Footer />
    </div>
    
  );
};

export default page;
