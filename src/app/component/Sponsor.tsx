import React from 'react';
import Image from 'next/image';

const Sponsor: React.FC = () => {
    return (
        <div className="flex flex-col mt-6 justify-center items-center h-full">
            <h2 className="text-xl font-semibold text-primary">
                Support a Cause That Matters
            </h2>
            <p className="mt-4 text-justify text-black whitespace-pre-line text-[17px]">
                <span className='font-bold'>Account Details:</span>
                <br />
                <br />
                <span className='font-bold'>Account Name&#58;</span> Shiksha Mahakumbh
                <br />
                <span className='font-bold'>Account Number&#58;</span> 42563560855
                <br />
                <span className='font-bold'>Bank:</span> State Bank of India
                <br />
                <span className='font-bold'>Branch&#58; </span>Chandigarh Main Branch
                <br />
                <span className='font-bold'>IFSC Code&#58;</span> SBIN0000628
                <br />
                <span className='font-bold'>UPI ID&#58; </span>shikshamahakhumb@sbi
            </p>
            <br />
            <Image
                src="/2023K/fee.png"
                alt="Sponsor Image"
                width={300}
                height={300}
            />
            <p className="mt-4 text-justify text-black whitespace-pre-line">For more details about Sponsorship, <a className=' font-semibold text-primary' href='/Sponsors.pdf'>Click here</a></p>
        </div> 
        
    );
}

export default Sponsor;
