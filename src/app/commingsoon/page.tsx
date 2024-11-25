import Image from 'next/image';
import NavBar from '../component/NavBar';
import SlideShow from '../component/SlideShow';
import Info from '../component/Info';
import Footer from '../component/Footer';
import TopInfo from '../component/TopInfo';
import CommingSoon from '../component/CommingSoon'; // Make sure ComingSoon component is imported

const Page = () => {
  return (
    <>
      <TopInfo />
      <NavBar />
      <div className="flex flex-col sm:flex-row space-y-4">
        <div className="w-full sm:w-1/5 sm:flex-col"></div>
        
        <div className="w-full sm:w-3/5 sm:flex-col">
          <CommingSoon />
        </div>

        <div className="w-full sm:w-1/5 sm:flex-col"></div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
