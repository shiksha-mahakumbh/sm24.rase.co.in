import Image from 'next/image';
import { FC } from 'react';
import TopInfo from '../component/TopInfo';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';

const Page: FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Info and Navbar */}
      <TopInfo />
      <NavBar />
<div className="flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-primary text-2xl font-bold mb-6">
        Principals’ Conclave
      </h1>

      {/* Image */}
      <div className="relative w-[100vw] md:w-[60vw] h-[100vh] mb-4">
        <Image
          src="/programme/principalconclave.jpg"
          alt="Principal's Conclave"
          layout="fill"
          objectFit="contain"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Download Button */}
      <a
        href="/programme/principalconclave.jpg"
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
