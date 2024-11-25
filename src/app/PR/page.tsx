'use client'
import React, { useEffect, useState } from 'react';
import { db } from '@/app/firebase';
import { collection, getDocs } from 'firebase/firestore';
import TopInfo from "@/app/component/TopInfo";
import NavBar from "@/app/component/NavBar";
import Footer from "@/app/component/Footer";

interface FormData {
  name: string;
  role: string;
  email: string;
  contactNumber: string;
  feeReceipt: string;
  vb: string;
  feeAmount: number;
}

const Page: React.FC = () => {
  const [formDataList, setFormDataList] = useState<FormData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, 'ParticipantRegsm24');
        const querySnapshot = await getDocs(colRef);

        const dataList: FormData[] = [];

        querySnapshot.forEach((doc) => {
          
          const data = doc.data() as FormData;
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
    <div className="bg-white min-h-screen ">
    <TopInfo />
    <NavBar />
  <h2>Your component content here</h2>
  <table>
    <thead>
      <tr >
        <th className='border text-primary'>Name</th>
        <th className='text-primary border'>Role</th>
        <th className='text-primary border'>Email</th>
        <th className='text-primary border'>Contact Number</th>
        <th className='text-primary border'>feeRecipt</th>
        <th className='text-primary border'>vb</th>
        <th className='text-primary border'>Fee Amount</th>
        
      </tr>
    </thead>
    <tbody>
      {formDataList.map((formData, index) => (
        <tr key={index}>
          <td className='text-black border'>{formData.name}</td>
          <td className='text-black border'>{formData.role}</td>
          <td className='text-black border'>{formData.email}</td>
          <td className='text-black border'>{formData.contactNumber}</td>
          <td className='text-black border'>
          {formData.feeReceipt }
          </td>
          <td className='text-black border'>{formData.vb}</td>
          <td className='text-black border'>{formData.feeAmount}</td>
          
        </tr>
      ))}
    </tbody>
  </table>
  <Footer />
    </div>

  );
};

export default Page;
