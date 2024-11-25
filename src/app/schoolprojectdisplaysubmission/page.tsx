import React from "react";
import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import Footer from "@/app/component/Footer";
import SchoolProjectForm from "../component/SchoolProjectForm";
import Marquees from "../component/Marquees";

const page = () => {
  return (
    <div className="bg-white min-h-screen">
      <TopInfo />
      <NavBar />
      <Marquees />
      <SchoolProjectForm />
      <Footer />
    </div>
    
  );
};

export default page;
