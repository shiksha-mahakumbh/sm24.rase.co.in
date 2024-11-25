import React from 'react';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';

const Marquees: React.FC = () => {

  interface Item {
    imageUrl: string;
    text: string;
    link: string;
  }

  const marquees: Item[] = [
    
    { imageUrl: '/new.gif', text: 'Shiksha Kumbh 2024 Successfully Completed on June 30, 2024 @ NIT Srinagar, To Watch the Event Click Here.', link: 'https://www.youtube.com/watch?v=73I3Knmqun4&ab_channel=ShikshaMahakumbh' },
    { imageUrl: '/new.gif', text: '4th Edition of RASE Conferences is going to held at IIT Ropar. Stay tuned for more updates.', link: 'https://sm24.rase.co.in' },
    { imageUrl: '/new.gif', text: '2nd Edition of Shiksha Mahakumbh is postponed due to unavoidable circumstances. All registrations and papers submitted will be valid in the rescheduled programme. Further the process of registrations and invitations will continue as earlier. Inconvenience caused due to postponement of the programme is deeply regretted. Stay tuned with us at our website and social media handles for more updates.', link: 'https://sm24.rase.co.in' },
   
  ];

  return (
    <div className='flex flex-row bg-orange-50 w-full'>
      <div className='text-white bg-[#4E3636] font-semibold text-center p-2 text-base py-2'>
        Announcement
      </div>
      <Marquee pauseOnHover={true} pauseOnClick={true}>
        {marquees.map((marqueeContent, index) => (
          <div key={index} className='flex items-center'>
            <div>
              <img src={marqueeContent.imageUrl} alt="Item Image" className="mt-1 me-1 object-cover" />
            </div>
            <div>
              <Link href={marqueeContent.link} legacyBehavior>
                <a className='text-gray-900 font-semibold pe-12 z-1'>{marqueeContent.text}</a>
              </Link>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Marquees;
