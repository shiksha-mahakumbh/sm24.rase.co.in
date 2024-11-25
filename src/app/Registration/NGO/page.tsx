
import React  from 'react';

import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import Footer from "@/app/component/Footer";
import NGOReg  from '@/app/component/NGOReg'
import Marquees from '@/app/component/Marquees';
const ImageUploader: React.FC = () => {
  
  return (
    <div className="bg-white min-h-screen ">
    <TopInfo />
    <NavBar />
    <Marquees />
    <NGOReg/>
    <Footer />
 
    </div>
  );
};

export default ImageUploader;
