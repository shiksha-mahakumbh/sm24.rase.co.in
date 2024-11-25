
import React  from 'react';

import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import Footer from "@/app/component/Footer";
import OrganiserRegistration  from '@/app/component/OrganiserRegistration'
import Marquees from '@/app/component/Marquees';
const page: React.FC = () => {
  
  return (
    <div className="bg-white min-h-screen ">
    <TopInfo />
    <NavBar />
    <Marquees />
    <OrganiserRegistration />
    <Footer />
 
    </div>
  );
};

export default page;
