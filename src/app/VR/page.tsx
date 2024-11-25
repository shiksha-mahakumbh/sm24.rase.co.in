'use client'
import React, { useEffect, useState } from 'react';
import { db } from '@/app/firebase';
import { collection, getDocs } from 'firebase/firestore';
import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import Footer from "@/app/component/Footer";

interface NgoData {
  name: string;
  Affiliation: string;
  email: string;
  PhoneNumber: string;
  Services: string;
  Attachments: string;
  feeReceipt:string;
}

const Page: React.FC = () => {
  const [formDataList, setFormDataList] = useState<NgoData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, 'RegestrationVolsm24');
        const querySnapshot = await getDocs(colRef);

        const dataList: NgoData[] = [];

        querySnapshot.forEach((doc) => {
          
          const data = doc.data() as NgoData;
          dataList.push(data);
        });

        setFormDataList(dataList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white min-h-screen items-center">
    <TopInfo />
    <NavBar />
  <h2>Your component content here</h2>
  <table className="border-collapse border">
  <thead>
    <tr>
      <th className="border text-primary">Name</th>
      <th className="border text-primary">Affiliation</th>
      <th className="border text-primary">Email</th>
      <th className="border text-primary">Contact Number</th>
      <th className="border text-primary">Services</th>
      <th className="border text-primary">Attachments</th>
      
    </tr>
  </thead>
  <tbody>
    {formDataList.map((formData, index) => (
      <tr key={index} className="border">
        <td className="border text-black">{formData.name}</td>
        <td className="border text-black">{formData.Affiliation}</td>
        <td className="border text-black">{formData.email}</td>
        <td className="border text-black">{formData.PhoneNumber}</td>
        <td className="border text-black">{formData.Services}</td>
        <td className="border text-black">{formData.feeReceipt}</td>
        
      </tr>
    ))}
  </tbody>
</table>
  <Footer />
    </div>

  );
};

export default Page;
