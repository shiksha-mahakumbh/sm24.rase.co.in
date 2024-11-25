import React from "react";
import TopInfo from "../component/TopInfo";
import NavBar from "../component/NavBar";
import Commites from "../component/Commites";
import Footer from "../component/Footer";

const LocalAdvisoryCommitee = [
  {
    name: "Mr. Vijay Nadda",
    designation: "Org. Secretary, Vidya Bharti (NZ)",
    sNo: "1",
  },
  {
    name: "Mr. Balkishan",
    designation: "Jt. Org. Secretary, Vidya Bharti (NZ)",
    sNo: "2",
  },
  {
    name: "Dr. Ashok Pal",
    designation: "President, Vidya Bharti (NZ)",
    sNo: "3",
  },
  {
    name: "Mr. Surendar Attri",
    designation: "Vice President, Vidya Bharti (NZ)",
    sNo: "4",
  },
  {
    name: "Mr. Praveen Saini",
    designation: "Vice President, Vidya Bharti (NZ)",
    sNo: "5",
  },
  {
    name: "Mr. Desh Raj",
    designation: "Gen. Secretary, Vidya Bharti (NZ)",
    sNo: "6",
  },
  {
    "name": "Dr. Manoj Kumar Teotia",
    "designation": "CRRID, Chandigarh",
    "sNo": "7"
  },
  {
    "name": "Dr. Pooja D.",
    "designation": "CSIR-CSIO, Chandigarh",
    "sNo": "8"
  },
  {
    "name": "Dr. Praveen Kumar",
    "designation": "IACS, Kolkata",
    "sNo": "9"
  },
  {
    "name": "Dr. Jitesh Kumar Pandey",
    "designation": "PMIDC, DLG, Punjab",
    "sNo": "10"
  },
  {
    "name": "Mr. Manoj Singhal",
    "designation": "Scientific Advisor, DHE",
    "sNo": "11"
  }
];

const OrganisingCommitee = [
  {
    name: "Dr. Pankaj Kumar",
    designation: "CU, Himachal Pradesh",
    sNo: "1",
  },
  {
    name: "Mr. Saurabh Sharma",
    designation: "Dy. Registrar, IKGPTU, Amritsar Campus",
    sNo: "2",
  },
  {
    name: "Dr. Pratibha Gupta",
    designation: "President, DHE",
    sNo: "3",
  },
  {
    name: "Dr. Amit Kansal",
    designation: "Independrnt Director, NHPC",
    sNo: "4",
  },
  {
    name: "Dr. Ravi Kant",
    designation: "IIT Ropar",
    sNo: "5",
  },
  {
    name: "Dr. Kishant Kumar",
    designation: "IIT Ropar",
    sNo: "6",
  },
  {
    name: "Dr. Tharamani C.N.",
    designation: "IIT Ropar",
    sNo: "7",
  },
  {
    name: "Prof. Sathans",
    designation: "NIT Kurukshetra",
    sNo: "8",
  },
  {
    name: "Dr. Vijay Kumar Sharma",
    designation: "NIT Srinagar",
    sNo: "9",
  },
  {
    name: "Dr. Vipan Pal Singh",
    designation: "CU, Punjab",
    sNo: "10",
  },
  {
    name: "Dr. Anshul",
    designation: "Delhi University",
    sNo: "11",
  },
  {
    name: "Dr. Nitya Sharma",
    designation: "IKGPTU",
    sNo: "12",
  },
  {
    name: "Dr. Neelum",
    designation: "LPU",
    sNo: "13",
  },
  {
    name: "Mr. Saurabh Sharma",
    designation: "IKGPTU",
    sNo: "14",
  },
  {
    name: "Prof. Anish Sachdeva",
    designation: "NIT Jalandhar",
    sNo: "15",
  },
  {
    name: "Dr. Praveen Sharma",
    designation: "CU, Jammu",
    sNo: "16",
  },
  {
    name: "Dr. Ravi Prakash",
    designation: "CBLU, Haryana",
    sNo: "17",
  },
  {
    name: "Dr. Shamsher Singh",
    designation: "AB College Pathankot",
    sNo: "18",
  },
  {
    name: "Dr. Ankit",
    designation: "LLRUVAS, Hisar, Haryana",
    sNo: "19",
  }
];



  const ConferenceSecretaries   = [
    {
      name: "Dr. Pushpendra P. Singh",
      designation: "IIT Ropar",
      sNo: "1",
    },
   
    {
      name: "Dr. Jatinder Garg",
      designation: "BHSBIET, Lehragaga",
      sNo: "2",
    },
  ];

  const ConferenceJointSecretaries = [
    {
      name: "Dr. Atharva Poundarik",
      designation: "IIT Ropar",
      sNo: "1",
    },
    {
      name: "Mr. Mandeep Tiwari",
      designation: "Business Advisor, DHE",
      sNo: "2",
    },
    {
      name: "Col. K. K. Kakkar",
      designation: "Academic Advisor, DHE",
      sNo: "3",
    }
  ];
  

// Additional members
const ConferenceConveners = [
  {
    name: "Dr. Vivekanand Shukla",
    designation: "IIT Ropar",
    sNo: "1",
  },
  {
    name: "Dr. Mohit Tyagi",
    designation: "PEC Chandigarh",
    sNo: "2",
  }
];

  
const NationalAdvisoryCommitee = [
  { sNo: "1", name: "Mr. S. Somanath", designation: "Chairman, ISRO" },
  { sNo: "2", name: "Mr. A. Rajarajan", designation: "Director, SDSC" },
  { sNo: "3", name: "Dr. Samir V. Kamat", designation: "Chairman, DRDO" },
  { sNo: "4", name: "Dr. Ajit Kumar Mohanty", designation: "Chairman, DAE" },
  { sNo: "5", name: "Prof. Dinesh Prasad Saklani", designation: "Chairman, NCERT" },
  { sNo: "6", name: "Mrs. Nidhi Chhibber", designation: "Chairperson, CBSE" },
  { sNo: "7", name: "Prof. Yogesh Singh", designation: "Chairperson, NCTE" },
  { sNo: "8", name: "Dr. Nirmaljeet Singh Kalsi", designation: "Chairperson, NCVET" },
  { sNo: "9", name: "Mr. Mamidala Jagadesh Kumar", designation: "Chairperson, UGC" },
  { sNo: "10", name: "Prof. Rajive Kumar", designation: "Member Secretary, AICTE" },
  { sNo: "11", name: "Mr. Govindan Rangarajan", designation: "Director, IISc" },
  { sNo: "12", name: "Prof. Anantha Ramakrishnan", designation: "Director, CSIO" },
  { sNo: "13", name: "Prof. Adarsh Pal Vij", designation: "Chairman, PPCB" },
  { sNo: "14", name: "Dr. Jaideep Arya", designation: "Chairman, Yog Aayog, Haryana" },
  { sNo: "15", name: "Mr. Prateek Kishore", designation: "Director, TBRL/DRDO" },
  { sNo: "16", name: "Mr. Kashmiri Lal", designation: "Org. Secretary, SJM" },
  { sNo: "17", name: "Mr. Raghunandan", designation: "Org. Secretary, VB - USS" },
  { sNo: "18", name: "Mr. Satish Kumar", designation: "Joint Org. Secretary, SJM" },
  { sNo: "19", name: "Prof. Pawan Kumar Singh", designation: "Director, IIM Trichy" },
  { sNo: "20", name: "Prof. Laxmidhar Behera", designation: "Director, IIT Mandi" },
  { sNo: "21", name: "Prof. Manoj Singh Gaur", designation: "Director, IIT Jammu" },
  { sNo: "22", name: "Prof. Shreepad Karmakar", designation: "Director, IIT Bhubaneswar" },
  { sNo: "23", name: "Prof. V. R. Desai", designation: "Director, IIT Dharwad" },
  { sNo: "24", name: "Prof. Binod Kumar Kanaujia", designation: "Director, NIT Jalandhar" },
  { sNo: "25", name: "Prof. B.V. Ramana Reddy", designation: "Director, NIT Kurukshetra" },
  { sNo: "26", name: "Prof. O. R. Jaiswal", designation: "Director, NIT Goa" },
  { sNo: "27", name: "Prof. Anupam Shukla", designation: "Director, NIT Surat" },
  { sNo: "28", name: "Prof. Lalit Kumar Avasthi", designation: "Director, NIT Uttarakhand" },
  { sNo: "29", name: "Prof. M. C. Govil", designation: "Director, NIT Sikkim" },
  { sNo: "30", name: "Prof. Gautam Sutradhar", designation: "Director, NIT Jamshedpur" },
  { sNo: "31", name: "Prof. Ajay Sharma", designation: "Director, NIT Delhi" },
  { sNo: "32", name: "Prof. Venu Gopal", designation: "Director, NIT Nagaland" },
  { sNo: "33", name: "Prof. Ramana Rao", designation: "Director, NIT Raipur" },
  { sNo: "34", name: "Prof. Prasad Krishna", designation: "Director, NIT Calicut" },
  { sNo: "35", name: "Prof. K. K. Shukla", designation: "Director, MANIT Bhopal" },
  { sNo: "36", name: "Prof. N. P. Padhy", designation: "Director, MNIT Jaipur" },
  { sNo: "37", name: "Prof. Usha", designation: "Director, NITTTR Chennai" }
];

const Director =[
  {
    name:"Dr. Thakur SKR",
    designation:"Sci/Engr-SF, ISRO and Director, DHE & VBITR",
    sNo:"1"
  }
]


const page = () => {

  return (
    <div className="bg-white">
      <TopInfo />
      <NavBar />
      <Commites title="NATIONAL ADVISORY COMMITTEE " members={NationalAdvisoryCommitee} />
      <Commites title="LOCAL ADVISORY COMMITTEE " members={LocalAdvisoryCommitee} />
      <Commites title="ORGANIZING COMMITTEE " members={OrganisingCommitee} />
      <Commites title="CONFERENCE DIRECTOR" members={Director}/>
      <Commites title="CONFERENCE SECRETARIES " members={ConferenceSecretaries} />
      <Commites title="CONFERENCE JOINT SECRETARIES " members={ConferenceJointSecretaries} />
      <Commites title="CONFERENCE CONVENERS" members={ConferenceConveners} />
     
      <Footer/>
    </div>

  );
};

export default page;
