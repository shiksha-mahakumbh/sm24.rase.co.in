"use client";
import React, { useState, useEffect } from "react";

const Info = () => {
  const text1 = `Indian Institute of Technology, Ropar (IIT Ropar) is one of the new IITs (established in 2008) set up by the Ministry of Human Resource Development (MHRD), Government of Bharat. The Government of Punjab has allotted 501 acres of land on the banks of the river Sutlej to IIT Ropar. The foundation stone of the Institute was laid on February 24, 2009. The Institute enables students to gain exposure to recent trends in their chosen domains of study and practical experience through a wide variety of activities that the institute facilitates in its own campus and arranges for in collaboration with industry and other institutes. This campus is a self-contained township catering to all the needs of faculty, staff and students. Arrangements have been made for classes, laboratories, hostels and faculty accommodation.`;

  const text2 = `The Department of Holistic Education, Vidya Bharti, stands at the forefront of a noble mission to promote education rooted in Bhartiya values and culture on a global scale. With unwavering dedication spanning several decades, we have been committed to ensuring the welfare of all through holistic education. This journey has seen the successful launch of the "Shiksha Mahakumbh" initiative, which made its historic debut in June 2023, with the inaugural session held at NIT Jalandhar, marking a momentous stride in our quest to reimagine education. Owing to the overwhelming demand from educational institutions to host future editions of Shiksha Mahakumbh, we are thrilled to announce that the 2nd edition of this prestigious event is scheduled to be held at IIT Ropar in October 2024.
   
   This edition of Shiksha Mahakumbh is themed on “Role of Indian Education System for Global Development” and invites contributions in a diverse array of areas crucial to the transformation of the World Education System. From global perspective integration and innovative pedagogical approaches to technological advancements, the conference aims to delve into critical themes such as inclusivity, quality assurance, teacher training, and policy advocacy. The discussions will also explore the role of education in addressing sustainable development goals promoting cultural exchange, and mitigating the digital divide. The conference envisions a comprehensive approach, advocating for multidisciplinary learning, ethical and sustainable education practices, and flexible learning pathways. It seeks to facilitate meaningful dialogue between academicians, researchers, and industrialists, with the ultimate goal of formulating a post-conference action plan for tangible impact on World Education Landscape.`;

  const [isText1Expanded, setIsText1Expanded] = useState(false);
  const [isText2Expanded, setIsText2Expanded] = useState(false);

  const toggleText1 = () => {
    setIsText1Expanded(!isText1Expanded);
  };

  const toggleText2 = () => {
    setIsText2Expanded(!isText2Expanded);
  };

  return (
    <div className="bg-white px-4 flex flex-col justify-between items-start">
      <h1 className="text-xl font-semibold pt-4 text-primary text-center">
        IIT Ropar
      </h1>
      <div className="whitespace-pre-line text-justify text-l text-black pt-2">
        {isText1Expanded ? text1 : `${text1.slice(0, 240)}... `}
        {!isText1Expanded && (
          <button
            onClick={toggleText1}
            className="text-primary font-bold"
          >
            Read More
          </button>
        )}
        {isText1Expanded && (
          <button
            onClick={toggleText1}
            className="text-primary font-bold"
          >
            Show Less
          </button>
        )}
      </div>

      <h1 className="text-xl font-semibold pt-2 text-primary text-center">
        Shiksha Mahakumbh
      </h1>
      <div className="whitespace-pre-line text-justify text-l text-black pt-4 pb-4">
        {isText2Expanded ? text2 : `${text2.slice(0, 239)}... `}
        {!isText2Expanded && (
          <button
            onClick={toggleText2}
            className="text-primary font-bold"
          >
            Read More
          </button>
        )}
        {isText2Expanded && (
          <button
            onClick={toggleText2}
            className="text-primary font-bold"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Info;
