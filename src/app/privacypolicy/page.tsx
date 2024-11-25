import React from "react";
import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import ImportantDates from "@/app/component/ImportantDates";
import Footer from "@/app/component/Footer";
import PrivacyPolicy from "../component/PrivacyPolicy";

const page = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <TopInfo />
      <NavBar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default page;
