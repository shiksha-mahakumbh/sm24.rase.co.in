import React from 'react';
import { MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';

interface ContactInfo {
  name: string;
  title: string;
  organization: string;
  address: string;
  emails: string[];
  phones: string[];
  websites: string[];
  whatsApp: string[]; 
}

const contactData: ContactInfo = {
  name: 'Shiksha Mahakumbh Office',
  title: '',
  organization: 'Department of Holistic Education, Plot No. 1, Sector 71, Punjab-160071',
  address: 'Shiksha Mahakumbh, Secretariat, IIT Ropar, Punjab - 140001, Bharat',
  emails: ['rase@iitrpr.ac.in', 'info@rase.co.in'],
  phones: ['+91-1881234023'],
  websites: ['https://rase.co.in', 'https://dhe.org.in'],
  whatsApp: ['7903431900'],
};

const ContactUs: React.FC = () => {
  return (
    <div className="bg-gray-50 md:w-3/5 h-auto ml-auto mr-auto mt-6 mb-6 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
      <h2 className="text-2xl font-semibold pb-4 text-primary text-center animate-fadeIn">
        Contact Us
      </h2>
      <div className="flex justify-center">
        <a href="tel:+911881234023">
          <img
            src="https://www.shutterstock.com/image-vector/phone-handset-speech-bubble-3d-600nw-2101642696.jpg"
            alt="Phone"
            className="w-32 h-32 object-cover rounded-full shadow-lg transform hover:rotate-6 transition-transform duration-300"
          />
        </a>
      </div>
      <div className="text-black text-xl mt-4 space-y-4">
        <div className="flex text-primary items-center">
          <strong className="text-xl">{contactData.name}</strong>
        </div>
        <div className="flex items-center">
          <p>{contactData.address}</p>
        </div>
        <div className="flex items-center">
          <p>{contactData.organization}</p>
        </div>
        <div className="mt-4">
          <MailOutlined className="text-2xl mr-2" />
          Email:
          {contactData.emails.map((email, index) => (
            <span key={index}>
              <a
                href={`mailto:${email}`}
                className="text-primary font-semibold transition-colors duration-300 hover:text-blue-500 ml-2"
              >
                {email}
              </a>
              {index < contactData.emails.length - 1 && ' | '}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <PhoneOutlined className="text-2xl mr-2" />
          Mobile:
          {contactData.phones.map((phone, index) => (
            <span key={index}>
              <a
                href={`tel:${phone}`}
                className="text-primary font-semibold transition-colors duration-300 hover:text-blue-500 ml-2"
              >
                {phone}
              </a>
              {index < contactData.phones.length - 1 && ' | '}
            </span>
          ))}
        </div>
        {contactData.whatsApp?.length ? (
          <div className="mt-4">
            <PhoneOutlined className="text-2xl mr-2" />
            WhatsApp:
            {contactData.whatsApp.map((whatsApp, index) => (
              <span key={index}>
                <a
                  href={`tel:${whatsApp}`}
                  className="text-primary font-semibold transition-colors duration-300 hover:text-blue-500 ml-2"
                >
                  {whatsApp}
                </a>
                {index < contactData.whatsApp.length - 1 && ' | '}
              </span>
            ))}
          </div>
        ) : null}
        <div className="mt-4">
          <GlobalOutlined className="text-2xl mr-2" />
          Website:
          {contactData.websites.map((website, index) => (
            <span key={index}>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold transition-colors duration-300 hover:text-blue-500 ml-2"
              >
                {website}
              </a>
              {index < contactData.websites.length - 1 && ' | '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
