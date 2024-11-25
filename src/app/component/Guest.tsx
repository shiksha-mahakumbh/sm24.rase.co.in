import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface GuestProps {
  name: string;
  place: string;
  designation: string;
  imageSrc: string;
  href?: string; // Optional href property
}

const Guest: React.FC<GuestProps> = ({ name, place, designation, imageSrc, href }) => {
  return (
    <Card className="py-4 border border-primary rounded-xl max-w-sm mx-auto">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        {href ? (
          <a href={href} className="text-tiny hover:text-red-800 hover:bg-gray-100 uppercase font-bold text-black" target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        ) : (
          <p className="text-tiny uppercase font-bold text-black">{name}</p>
        )}
      </CardHeader>
      <CardBody className="flex flex-col py-2 items-center">
        <Image
          alt="Guest"
          className="object-cover rounded-xl mb-2"
          src={imageSrc}
          width={270}
          height={270}
          style={{ width: '260px', height: '290px', objectFit: 'cover' }}
        />
        <div className="w-full px-4">
          <div className="flex justify-between w-full mb-1">
            <small className="text-black">{designation}</small>
          </div>
          <h4 className="font-bold text-large text-black">{place}</h4>
        </div>
      </CardBody>
    </Card>
  );
};

export default Guest;
