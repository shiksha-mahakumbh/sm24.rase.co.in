
import React  from 'react';

import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import Footer from "@/app/component/Footer";
import Topics from '../component/Topics';
const page: React.FC = () => {
  
  return (
    <div className="bg-white min-h-screen ">
    <TopInfo />
    <NavBar />
    <div className= "flex flex-row">
    <div className="md:w-1/6"></div>
    <div className="md:w-4/6">
   <Topics/>

    </div>
    <div className="md:w-1/6"></div>
    </div>
    <Footer />
 
    </div>
  );
};

export default page;
