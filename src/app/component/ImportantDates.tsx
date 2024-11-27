import React from "react";

const ImportantDates: React.FC = () => {
  interface DateInfo {
    label: string;
    date: string;
  }

  const dates: DateInfo[] = [
    {
      label: "Last Date of Abstract Submission ",
      date: "December 05, 2024",
    },
    {
      label: "Abstract Acceptance ",
      date: "December 07, 2024",
    },
    {
      label: "Full Length Paper Submission ",
      date: "December 10, 2024",
    },
    {
      label: "Regular Registration ",
      date: "December 12, 2024",
    },
    {
      label: "Late Registration ",
      date: "December 15, 2024",
    },
    {
      label: "Conference Date",
      date: "To be announced",
    },
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50">
      <div className="p-6 bg-white rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-3xl">
        <h2 className="text-primary text-4xl font-bold mb-4 text-center">
          Important Dates
        </h2>
        <table className="w-full text-left border-collapse">
          <tbody>
            {dates.map((dateInfo, index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="p-4 text-black font-medium">
                  {dateInfo.label}
                </td>
                <td className="p-4 text-black font-semibold text-right">
                  {dateInfo.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportantDates;
