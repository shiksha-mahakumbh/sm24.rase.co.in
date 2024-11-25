import React from 'react';

// Define the type for individual phones
type phone = {
  name: string;
  role: string;
  phone: string;
};

// Define the type for the data object
type Data = {
  [key: string]: phone[];
};

// Define the data with the correct type
const data: Data = {
  "SHIKSHA MAHAKUMBH": [
    { name: "Dr Shamsher Singh", role: "Co-ordinator", phone: "9463231250" },
    { name: "Dr Vijay Kr Sharma", role: "Co-coordinator", phone: "6005495506" },
  ],
  "SCHOOL EDUCATION": [
    { name: "Dr Jitesh Pandey", role: "Co-ordinator", phone: "8360990494" },
    { name: "Dr Neelam Sharma", role: "Co-coordinator", phone: "6239612140" },
    { name: "Dr Rajeesh Talwar", role: "Co-coordinator", phone: "9815779477" },
  ],
  "HIGHER EDUCATION": [
    { name: "Dr Vipan Pal", role: "Co-ordinator", phone: "9815577944" },
    { name: "Dr Nitya Sharma", role: "Co-coordinator", phone: "9814733309" },
  ],
  "ACADEMIC AFFAIRS": [
    { name: "Dr Ravi Prakash", role: "Co-ordinator", phone: "8171129971" },
    { name: "Dr Pankaj Kumar", role: "Co-coordinator", phone: "9540344621" },
    { name: "Dr Mahesh Kularia", role: "Co-coordinator", phone: "8360194487" },
  ],
  "VENUE MANAGEMENT": [
    { name: "Dr Jitendra Garg", role: "Co-ordinator", phone: "9501956000" },
    { name: "Dr Mohit Tvagi", role: "Co-coordinator", phone: "8826841126" },
    { name: "Sh. Mandeep Tiwari", role: "Co-coordinator", phone: "9814978666" },
  ],
  "HOSPITALITY": [
    { name: "Dr Praveen Sharma", role: "Co-ordinator", phone: "9988625485" },
    { name: "Dr Neeraj Gandotra", role: "Co-coordinator", phone: "9418247612" },
    { name: "Mr. Apoorv", role: "Co-coordinator", phone: "8533972320" },
    { name: "Mr. Ujjwal", role: "Co-coordinator", phone: "9631393943" },
  ],
  "PURCHASE AND FINANCE MANAGEMENT": [
    { name: "Smt. Pratibha Gupta", role: "Co-ordinator", phone: "9814738016" },
    { name: "Dr Manoj Teotia", role: "Co-coordinator", phone: "82838255348" },
  ],
  "PROGRAMME OUTREACH": [
    { name: "Prof Anish Sachdeva", role: "Co-ordinator", phone: "9501019873" },
    { name: "Dr Pooja Mahajan", role: "Co-coordinator", phone: "9465262383" },
    { name: "Shri Aditya", role: "Co-coordinator", phone: "7222999725" },
    { name: "Shri Janak Chauhan", role: "Co-coordinator", phone: "9991921687" },
    { name: "Shri Saurabh Chaudhary", role: "Co-coordinator", phone: "9622981239" },
    { name: "Dr Amit Kansal", role: "Co-coordinator", phone: "9501898500" },
  ],
  "VOLUNTEERS MANAGEMENT": [
    { name: "Prof Sathans", role: "Co-ordinator", phone: "9416334934" },
    { name: "Dr Ankit Goel", role: "Co-coordinator", phone: "9466747047" },
    { name: "Vikas Garg", role: "Co-coordinator", phone: "9988610629" },
  ],
};

// Define the data for the other section
const data1: Data = {
  "Himachal Pradesh": [
    {
      "name": "Dr. Pankaj",
      "role": "Convener",
      "phone": "9540344621"
    },
    {
      "name": "Dr. Surjeet Chandel",
      "role": "Co-convener",
      "phone": "7018192371"
    },
    {
      "name": "Dr. Neeraj Gandotra",
      "role": "Co-convener",
      "phone": "8580527369"
    },
    {
      "name": "Dr. Mrityunjay Shami",
      "role": "Co-convener",
      "phone": "9418247612"
    },
    {
      "name": "Dr. Kapil Sood",
      "role": "Co-convener",
      "phone": "8527104218"
    },
    
  ],
  "Delhi": [
    {
      "name": "Prof. Kaushal Sharma",
      "role": "Convener",
      "phone": "9810002953"
    },
    {
      "name": "Dr. Gaurav",
      "role": "Co-convener",
      "phone": "Not Provided"
    },
    {
      "name": "Dr. G.S. Sodhi",
      "role": "Co-convener",
      "phone": "9023925400"
    },
    {
      "name": "Dr. Atri",
      "role": "Co-convener",
      "phone": "9891158220"
    },
    {
      "name": "Dr. Vikram Chopra",
      "role": "Co-convener",
      "phone": "9007821010"
    },
  ],
  "Haryana": [
    {
      "name": "Dr. Ravi Prakash",
      "role": "Convener",
      "phone": "8171129971"
    },
    {
      "name": "Dr. Krishna Pandey",
      "role": "Co-convener",
      "phone": "7419089987"
    },
    {
      "name": "Dr. Vipin Jain",
      "role": "Co-convener",
      "phone": "9828117678"
    },
    {
      "name": "Dr. Ankit",
      "role": "Co-convener",
      "phone": "9466747047"
    }
  ],
  "Jammu & Kashmir": [
    {
      "name": "Dr. Praveen Kumar Sharma",
      "role": "Convener",
      "phone": "9501825252"
    },
    {
      "name": "Mohammad Malik",
      "role": "Co-convener",
      "phone": "9596861778"
    },
    {
      "name": "Dr. Nilesh",
      "role": "Co-convener",
      "phone": "6005495506"
    },
  ],
  "Punjab": [
    {
      "name": "Dr. Jatinder Garg",
      "role": "Convener",
      "phone": "9501956000"
    },
    {
      "name": "Dr. Vikas",
      "role": "Co-convener",
      "phone": "9988610629"
    },
    {
      "name": "Shri Ashok",
      "role": "Co-convener",
      "phone": "9417048224"
    },
    {
      "name": "Dr. Pooja",
      "role": "Co-convener",
      "phone": "9465262383"
    },
    {
      "name": "Shri Foran Chand",
      "role": "Co-convener",
      "phone": "9855613410"
    }
  ]
};

const Importantphones: React.FC = () => {
  return (
    <div className="container text-black mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-primary text-center">Important phones</h1>
      {Object.keys(data).map((section) => (
        <div key={section} className="mb-8">
          <h2 className="text-2xl text-primary font-semibold mb-4">{section}</h2>
          <table className="min-w-full bg-white border border-gray-800">
            <thead>
              <tr className="w-full bg-gray-100 border-b">
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Role</th>
                <th className="py-2 px-4 text-left">Phone</th>
              </tr>
            </thead>
            <tbody>
              {data[section].map((phone, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4 font-semibold">{phone.name}</td>
                  <td className="py-2 px-4">{phone.role}</td>
                  <td className="py-2 px-4">{phone.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {/* Second section */}
      <h1 className="text-3xl font-bold mb-6 text-primary text-center">प्रांत संयोजक एवं सहसंयोजक</h1>
      {Object.keys(data1).map((section) => (
        <div key={section} className="mb-8">
          <h2 className="text-2xl text-primary font-semibold mb-4">{section}</h2>
          {data1[section].length > 0 ? (
            <table className="min-w-full bg-white border border-gray-800">
              <thead>
                <tr className="w-full bg-gray-100 border-b">
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Role</th>
                  <th className="py-2 px-4 text-left">Phone</th>
                </tr>
              </thead>
              <tbody>
                {data1[section].map((phone, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4 font-semibold">{phone.name}</td>
                    <td className="py-2 px-4">{phone.role}</td>
                    <td className="py-2 px-4">{phone.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No phones available for this section.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Importantphones;
