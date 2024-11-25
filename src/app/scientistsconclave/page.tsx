import Image from 'next/image';
import { FC } from 'react';
import TopInfo from '../component/TopInfo';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import VcDirectorPanelists from '../component/VcDirectorPanelist';

const Page: FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Info and Navbar */}
      <TopInfo />
      <NavBar />
<div className="flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-primary text-2xl font-bold mb-6">
        Scientists’ Conclave
      </h1>

      {/* Image */}
      <div className="relative w-[100vw] md:w-[60vw] h-[100vh] mb-4">
        <Image
          src="/programme/scientistsconclave.jpg"
          alt="scientists's Conclave"
          layout="fill"
          objectFit="contain"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Download Button */}
      <a
        href="/programme/scientistsconclave.jpg"
        download
        className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark"
      >
        Download Image
      </a>
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
