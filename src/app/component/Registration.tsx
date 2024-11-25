"use client";
import React from "react";
import Link from "next/link";

const Registration = () => {
  return (
    <div className="bg-white p-6">
      <h1 className="text-2xl font-semibold text-primary mb-6">Registration for Shiksha Mahakumbh 2024</h1>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-white p-6 border rounded-lg shadow-md flex-1">
          <h2 className="text-xl font-semibold text-primary mb-4">Volunteer Registration</h2>
          <p className="text-gray-700 mb-4">
            Register as a volunteer in Shiksha Mahakumbh 2024.
          </p>
          <Link
            className="text-primary hover:underline"
            href="/Registration/Volunteer"
          >
            Click here to register
          </Link>
        </div>

        <div className="bg-white p-6 border rounded-lg shadow-md flex-1">
          <h2 className="text-xl font-semibold text-primary mb-4">NGO Registration</h2>
          <p className="text-gray-700 mb-4">
            Register your NGO for Shiksha Mahakumbh 2024.
          </p>
          <Link
            className="text-primary hover:underline"
            href="/Registration/NGO"
          >
            Click here to register
          </Link>
        </div>

        <div className="bg-white p-6 border rounded-lg shadow-md flex-1">
          <h2 className="text-xl font-semibold text-primary mb-4">Participant Registration</h2>
          <p className="text-gray-700 mb-4">
            Register as a participant in Shiksha Mahakumbh 2024
          </p>
          <Link
            className="text-primary hover:underline"
            href="/Registration/Participant"
          >
            Click here to register
          </Link>
        </div>
        <div className="bg-white p-6 border rounded-lg shadow-md flex-1">
          <h2 className="text-xl font-semibold text-primary mb-4">Organiser Registration</h2>
          <p className="text-gray-700 mb-4">
            Register as a Organiser in Shiksha Mahakumbh 2024
          </p>
          <Link
            className="text-primary hover:underline"
            href="/Registration/organiser"
          >
            Click here to register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
