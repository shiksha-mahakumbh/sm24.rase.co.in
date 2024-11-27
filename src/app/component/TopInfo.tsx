import React from "react";
import Image from "next/image";
const TopInfo = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white">
      <a href="https://www.iitrpr.ac.in/" target="_blank" rel="noopener noreferrer">
        <img
          src="/DHELogo.png" // Specify the left logo image path
          alt="Company Logo Left"
          className="p-1 w-20 h-16 md:w-20 md:h-16 lg:w-28 lg:h-28 "         
        />
      </a>
      <div className="text-center">
        <h2 className="text-lg md:text-xl lg:text-2xl text-primary font-bold">
        INTERNATIONAL CONFERENCE <br />
        </h2>
        <h1 className="text-l md:text-xl lg:text-2xl font-semibold text-primary">
          ON <br />
          INDIAN EDUCATION SYSTEM FOR GLOBAL DEVELOPMENT  <br />
        </h1>
      </div>
      <a href="https://www.dhe.org.in/">
        <img
          src="/logo.png" // Specify the right logo image path
          alt="Company Logo Right"
          className="p-1 w-20 h-16 md:w-20 md:h-16 lg:w-28 lg:h-28 "
         
        />
      </a>
    </div>
  );
};

export default TopInfo;
