import Image from 'next/image'
import TopInfo from "./component/TopInfo"
import NavBar from "./component/NavBar"
import SlideShow from "./component/SlideShow"
import Info from "./component/Info"
import Footer from "./component/Footer"
import Marquees from "./component/Marquees"
import Organiger from './component/Organiger'
export default function Home() {
  const slides1 = [
    {
      src: "/k6.jpg",
      alt: "Image 1",
      legend: "Prof. Rajeev Ahuja and Dr. Thakur SKR invited Smt. Droupadi Murmu, the Hon’ble President of Bharat, for the Shiksha Mahakumbh 2024 ",
    },
    {
      src: "/2024M/up_cm.jpg",
      alt: "Image 1",
      legend: "Shiksha Mahakumbh team inviting Hon’ble Chief Minister, UP to 2nd Edition",
    },
    {
      src: "/3.jpeg",
      alt: "Image 1",
      legend: "",
    },
    {
      src: "/2024M/6.jpg",
      alt: "Image 1",
      legend: "शिक्षा महाकुंभ के निमित्त  आईआईटी रोपड़ में DHE के दो दिवसीय आवासीय अभ्यास वर्ग के पहले दिन 3 सत्र संपन्न हुए जिसमें उत्तर क्षेत्र के  5 प्रांतो से 52 शिक्षाविद्व उपस्थित रहे तथा आईआईटी के लगभग 20 छात्र जो इस आयोजन को सफल बनाने में कार्यरत हैं विभिन्न सत्रों में उपस्थित रहे । प्रथम दिन डॉक्टर राजीव आहूजा जी डायरेक्टर आईआईटी रोपड़, माननीय विजय नड्डा जी विद्या भारती उत्तर क्षेत्र संगठन मंत्री एवं डॉक्टर सुदेश जी का मार्गदर्शन प्राप्त हुआ",
    },
    {
      src: "/2024M/7.jpg",
      alt: "Image 1",
      legend: "शिक्षा महाकुंभ के निमित्त  आईआईटी रोपड़ में DHE के दो दिवसीय आवासीय अभ्यास वर्ग के पहले दिन 3 सत्र संपन्न हुए जिसमें उत्तर क्षेत्र के  5 प्रांतो से 52 शिक्षाविद्व उपस्थित रहे तथा आईआईटी के लगभग 20 छात्र जो इस आयोजन को सफल बनाने में कार्यरत हैं विभिन्न सत्रों में उपस्थित रहे । प्रथम दिन डॉक्टर राजीव आहूजा जी डायरेक्टर आईआईटी रोपड़, माननीय विजय नड्डा जी विद्या भारती उत्तर क्षेत्र संगठन मंत्री एवं डॉक्टर सुदेश जी का मार्गदर्शन प्राप्त हुआ",
    },
    {
      src: "/6.jpeg",
      alt: "Image 1",
      legend: "",
    },
    {
      src: "/7.jpeg",
      alt: "Image 1",
      legend: "",
    },
    {
      src: '/11.jpg',
      alt: 'Image 1',
      legend: "",
    },
    {
      src: '/2.jpg',
      alt: 'Image 1',
      legend: "",
    },
    {
      src: '/2024M/5.jpg',
      alt: 'Image 1',
      legend: "",
    },
    {
      src: '/2024M/1.jpg',
      alt: 'Image 1',
      legend: "",
    },
    {
      src: '/2024M/2.jpg',
      alt: 'Image 1',
      legend: "",
    },
    {
      src: '/solan_dc.jpg',
      alt: 'Image 1',
      legend: "डॉ ठाकुर सुदेश रौनिजा जी शिक्षा कुंभ/महाकुंभ अभियान की टीम के साथ DC, सोलन को शिक्षा महाकुंभ के द्वतीय संस्करण का निमंत्रण देते हुए",
    },
    {
      src: '/uhf.jpg',
      alt: 'Image 1',
      legend: "डॉ ठाकुर सुदेश रौनिजा जी शिक्षा कुंभ/महाकुंभ अभियान की टीम के साथ VC, Dr Y S Parmar University of Horticulture and Forestry सोलन  को शिक्षा महाकुंभ के द्वतीय संस्करण का निमंत्रण देते हुए",
    },
    {
      src: '/2024M/3.jpg',
      alt: 'Image 1',
      legend: "Review Meeting for Shiksha Mahakumbh 2024 - Assessing Progress and Planning Next Steps",
    },
    {
      src: '/2024M/4.jpg',
      alt: 'Image 1',
      legend: "Review Meeting for Shiksha Mahakumbh 2024 - Assessing Progress and Planning Next Steps",
    },
    

    
  ];
  const MobileView = () => (
    <div className="flex flex-col space-y-4 items-center pt-1">
      <SlideShow slides={slides1}/>
      <div>
        <Info />
        
      </div>
      <div className="items-center w-full">
      <Organiger/>
      </div>
      <div>
      
      </div>
      <div>
      </div>
    </div>
  );
  

  const DesktopView = () => (
    <div className="flex flex-row space-x-4">
      <div className="w-1/5">
       
      </div>
      <div className="w-3/5">
      
      <SlideShow slides={slides1}/>
        <Info />
        <Organiger/>
      </div>
      <div className="w-1/5">
       
  
      </div>
    </div>
  );
  return (
   <div className="bg-white">
   <TopInfo/>
   <NavBar></NavBar>
   <Marquees/>
  
   <div>
    
      <div className="sm:hidden">
        <MobileView />
      </div>
      <div className="hidden sm:block">
        <DesktopView />
      </div>
    </div>
    <Footer/>
   </div>
  )
}
