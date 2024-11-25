import React from "react";
import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import ContactUs from "@/app/component/ContactUs";
import Footer from "@/app/component/Footer";
import Marquees from "../component/Marquees";

const page = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col" >
      <TopInfo />
      <NavBar />
      <Marquees />
      <ContactUs/>
      <Footer />
    </div>
  );
};

export default page;
