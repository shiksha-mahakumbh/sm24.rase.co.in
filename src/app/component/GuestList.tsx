import React from "react";
import Guest from "./Guest";


const cheifguests = [
  {
    id: 1,
    name: "Smt. Droupadi Murmu",
    designation: "Hon'ble President of Bharat",
    place: "Bharat",
    imageSrc: "/cheifguests/Droupadi.jpg",
  },
  {
    id: 2,
    name: "Shri Indrasena Reddy Nallu",
    designation: "Hon'ble Governor of Tripura",
    place: "Tripura",
    imageSrc: "/cheifguests/tripuragovernor.png",
  },
  {
    id: 3,
    name: "Dharmendra Pradhan",
    designation: "Hon'ble Education Minister of Bharat",
    place: "Bharat",
    imageSrc: "/cheifguests/educationminister.png",
  },
];
const guestofhonour = [
  {
    id: 1,
    name: "Shri Bhagwant Maan",
    designation: "Hon'ble Chief Minister of Punjab",
    place: "Punjab",
    imageSrc: "/cheifguests/bhagwantmaan.png",
  },
  {
    id: 2,
    name: "Shri Gulab Chand Kataria",
    designation: "Hon'ble Governor of Punjab",
    place: "Punjab",
    imageSrc: "/cheifguests/gulabchandkataria.png",
  },
  {
    id: 3,
    name: "shri Bandaru Dattatreya",
    designation: "Hon'ble Governor of Haryana",
    place: "Haryana",
    imageSrc: "/cheifguests/haryanagovernor.png",
  },
  {
    id: 4,
    name: "Shri Vinai Kumar Saxena",
    designation: "Hon'ble Lieutenant Governor of Delhi",
    place: "Delhi",
    imageSrc: "/cheifguests/delhigovernor.png",
  },
  {
    id: 5,
    name: "Shri Shiv Pratap Shukla",
    designation: "Hon'ble Governor of Himachal Pradesh",
    place: "Himachal Pradesh",
    imageSrc: "/cheifguests/himachalgovernor.png",
  },
  {
    id: 6,
    name: "Captain Anurag Thakur",
    designation: "MP, Mandi Lok Sabha & Ex-Cabinet Minister",
    place: "Himachal Pradesh",
    imageSrc: "/cheifguests/anuragthakur.png",
  },
  {
    id: 7,
    name: "Riniki Bhuyan Sarma",
    designation: "Managing Director",
    place: "Pride East Entertainment",
    imageSrc: "/cheifguests/rinki.png",
  },
];

const GuestList: React.FC = () => {
  return (
    <div className="p-4">
      <div className="p-4">
      <p className="text-2xl text-primary text-center uppercase font-bold mb-4">Chief Guest</p>
      <div className="flex flex-wrap">
        {cheifguests.map((guest) => (
          <div key={guest.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <Guest {...guest} />
          </div>
        ))}
      </div>
      </div>
      <div className="p-4">
      <p className="text-2xl text-primary text-center uppercase font-bold mb-4">Guests of Honour</p>
      <div className="flex flex-wrap">
        {guestofhonour.map((guest) => (
          <div key={guest.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <Guest {...guest} />
          </div>
        ))}
      </div>
      </div>
      
      </div>
  );
};

export default GuestList;
