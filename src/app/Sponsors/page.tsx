import React from "react";
import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import Sponsor from "@/app/component/Sponsor";
import Footer from "@/app/component/Footer";

const page = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <TopInfo />
      <NavBar />
      <Sponsor/>
      <Footer />
    </div>
  );
};

export default page;
