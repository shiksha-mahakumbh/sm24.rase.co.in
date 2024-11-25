"use client"
import React, { useEffect, useState } from "react";
import Guest from "./Guest";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {firebaseConfig} from "@/app/firebase";


const moderators = [
    {
        id: 1,
        name: "Prof. Rajeev Ahuja",
        designation: "Director",
        place: "IIT Ropar",
        imageSrc: "/moderators/rajivahuja.png",
      },
    {
        id: 2,
        name: "Prof. Som Nath Sachdeva",
        designation: "VC",
        place: "Kurukshetra University",
        imageSrc: "/moderators/somnath.jpg",
      },
];
const speakers = [
  
    {
        id: 1,
        name: "Prof. Rajbir Singh",
        designation: "VC",
        place: "MDU Rohtak",
        imageSrc: "/keynotespeakers/mdurohtakvc.png",
      },
      {
        id: 2,
        name: "Prof. Deepti Dharmani",
        designation: "VC",
        place: "CBLU Bhiwani",
        imageSrc: "/keynotespeakers/cblubhiwanivc.png",
      },
      {
        id: 3,
        name: "Dr. Rajeshwar Singh Chandel",
        designation: "VC",
        place: "Dr. YS Parmar University of Horticulture and Forestry, Solan",
        imageSrc: "/keynotespeakers/ysparmarsolanvc.png",
      },
     
      {
        id: 5,
        name: "Prof. Neelima Gupta",
        designation: "VC",
        place: "Dr. Harisingh Gour Vishwavidyalya, Sagar",
        imageSrc: "/keynotespeakers/harisinghvc.png",
      },
      {
        id: 6,
        name: "Prof. Prateek Sharma",
        designation: "VC",
        place: "DTU",
        imageSrc: "/keynotespeakers/dtuvc.png",
      },
      
      {
        id: 8,
        name: "Prof. Avinash Chandra Pandey",
        designation: "Director",
        place: "Inter University Accelerator Centre, Delhi",
        imageSrc: "/keynotespeakers/iuacdirector.png",
      },
      {
        id: 9,
        name: "Prof. (Dr.) Ashok Kumar Nagawat",
        designation: "VC",
        place: "DSEU, Delhi",
        imageSrc: "/keynotespeakers/dseuvc.jpg",
      },
     
      {
        id: 11,
        name: "Prof. (Dr.) Amar Pal Singh",
        designation: "VC",
        place: "NLU, Lucknow",
        imageSrc: "/keynotespeakers/nlulucknowvc.jpg",
      },
      {
        id: 12,
        name: "Prof. Alok Kumar Rai",
        designation: "VC",
        place: "Lucknow University",
        imageSrc: "/keynotespeakers/lucknowuniversityvc.jpg",
      },
      {
        id: 13,
        name: "Prof. Santishree Dhulipudi Pandit",
        designation: "VC",
        place: "Jawaharlal Nehru University",
        imageSrc: "/keynotespeakers/jnuvc.jpg",
      },
      {
        id: 14,
        name: "Dr. Nagarajan Ramamoorthy",
        designation: "Director",
        place: "IIM, Amritsar",
        imageSrc: "/keynotespeakers/iimamritsardirector.jpg",
      },
      {
        id: 15,
        name: "Prof. Raghavendra P. Tiwari",
        designation: "VC",
        place: "CU, Punjab",
        imageSrc: "/keynotespeakers/cupunjabvc.jpg",
      },
      {
        id: 16,
        name: "Prof. Dulal Panda",
        designation: "Director",
        place: "NIPER, Mohali",
        imageSrc: "/keynotespeakers/nipermohalidirector.jpg",
      },

];




const VcDirectorPanelists: React.FC = () => {
  const [firebaseSpeakers, setFirebaseSpeakers] = useState<any[]>([]);

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  useEffect(() => {
    // Fetch data from Firebase Firestore
    const fetchSpeakers = async () => {
      const querySnapshot = await getDocs(collection(db, "keynoteSpeakers")); // Use your collection name
      const fetchedSpeakers: any[] = [];
      querySnapshot.forEach((doc) => {
        fetchedSpeakers.push({ id: doc.id, ...doc.data() });
      });
      setFirebaseSpeakers(fetchedSpeakers);
    };
  
    fetchSpeakers();
  }, []);

  return (
    <div className="p-4">
        <div className="p-4">
      <p className="text-2xl text-primary text-center uppercase font-bold mb-4">Moderators</p>
      <div className="flex flex-wrap">
        {moderators.map((guest) => (
          <div key={guest.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <Guest {...guest} />
          </div>
        ))}
      </div>
      </div>

      <div className="p-4">
        <p className="text-2xl text-red-800 text-center uppercase font-bold mb-4">
          Panelists
        </p>
        <div className="flex flex-wrap">
          {/* Hardcoded speakers */}
          {speakers.map((guest) => (
            <div key={guest.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <Guest {...guest} />
            </div>
          ))}

          {/* Firebase speakers */}
          {firebaseSpeakers.map((guest) => (
            <div key={guest.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <Guest {...guest} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VcDirectorPanelists;
