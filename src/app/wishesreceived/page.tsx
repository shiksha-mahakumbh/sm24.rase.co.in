import React from "react";
import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import Footer from "@/app/component/Footer";
import GuestList from "../component/GuestList";
import KeynoteSpeakers from "../component/KeynoteSpeakers";
import WishesReceived from "../component/WishesReceived";

const page = () => {
  return (
    <div className="bg-white min-h-screen">
      <TopInfo />
      <NavBar />
      <div className="p-4">
      <WishesReceived />
      </div>
      <Footer />
    </div>
    
  );
};

export default page;
