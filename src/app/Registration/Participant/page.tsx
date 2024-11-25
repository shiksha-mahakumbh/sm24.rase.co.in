
import React  from 'react';

import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import Footer from "@/app/component/Footer";
import RegistrationForm  from '@/app/component/RegistrationForm '
import Marquees from '@/app/component/Marquees';
const ImageUploader: React.FC = () => {
  
  return (
    <div className="bg-white min-h-screen ">
    <TopInfo />
    <NavBar />
    <Marquees />
    <RegistrationForm/>
    <Footer />
 
    </div>
  );
};

export default ImageUploader;
