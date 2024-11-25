import React from "react";
import Guest from "./Guest";

const speakers = [
  
  {
    id: 1,
    name: "Prof. Tejinder Sharma",
    designation: "Pofessor in Department of Commerce",
    place: "Kurukshetra University",
    imageSrc: "/panelists/tejindersharma.png",
    href:'/panelists/tejindersharma.docx'
  },
  {
    id: 2,
    name: "Dr Vijay Sharma",
    designation: "Registrar",
    place: "Central University Punjab",
    imageSrc: "/panelists/registrarcupunjab.png",
    
  },
  
  
];

const WishesReceived: React.FC = () => {
  return (
    <div className="p-4">
      <div className="p-4">
      <p className="text-xl md:text-2xl text-primary text-center uppercase font-bold mb-4">Panelists</p>
      <div className="flex flex-wrap">
        {speakers.map((guest) => (
          <div key={guest.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <Guest {...guest} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default WishesReceived;
