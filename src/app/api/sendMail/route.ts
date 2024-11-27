import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import qr from "qrcode";

interface FormData {
CorrespondingAuthorName: string;
  PaperTitle: string;
  // Add other properties here as needed
}

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    console.log('Request body:', reqBody); // Log the request body to debug
    const { CorrespondingAuthorEmail, formData } = reqBody as { CorrespondingAuthorEmail: string, formData: FormData };

    if (!formData) {
      throw new Error("formData is undefined");
    }
    
    // Extract name from formData
    const { CorrespondingAuthorName } = formData;
    
    if (!CorrespondingAuthorName) {
      throw new Error("name is undefined");
    }

    const { PaperTitle } = formData;
    
    if (!PaperTitle) {
      throw new Error("name is undefined");
    }

    // Generate QR code data
    const qrCodeData = { ...formData, CorrespondingAuthorName };

    // Convert qrCodeData to a string
    const qrCodeDataString = JSON.stringify(qrCodeData);

    // Generate QR code
    const qrDataURL = await qr.toDataURL(qrCodeDataString);

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      // Your email configuration
      service: "Gmail",
      auth: {
        user: "shikshamahakumbh23@gmail.com",
        pass: "exknoltcwsyqhysg",
      },
    });

    // Email options
    const mailOptions = {
      from: "holisticeducation052021@gmail.com",
      to: CorrespondingAuthorEmail,
      subject: "Abstract Acceptance Notification",
      html: `
      <p style="font-family: Arial, sans-serif; font-size: 18px; font-weight: bold; color: #a52a2a; ">Department of Holistic Education</p>
      <img src="https://i.pinimg.com/736x/58/1b/c2/581bc29d2d2454f96c1fce932af83462.jpg" alt="QR Code" style="display: block; height:60px; width: 60px; align-items: center; margin: 20px auto;">
      <p style="font-family: Arial, sans-serif; font-size: 15px; color: #5072a7;">Dear, ${CorrespondingAuthorName}</p>
      <p style="font-family: Arial, sans-serif; font-size: 15px; color: #5072a7;">We are pleased to inform you that your abstract, titled "${PaperTitle}" has been accepted for presentation for International Conference on Indian Education System for Global Development", scheduled to take place at IIT Ropar.</p>
      <p style="font-family: Arial, sans-serif; font-size: 15px; color: #5072a7;">We appreciate the valuable insights your research offers into the ${PaperTitle}. Your work significantly contributes to the field and aligns well with the conference’s theme.</p>
      <p style="font-family: Arial, sans-serif; font-size: 15px; color: #5072a7;">We encourage you to register as soon as possible to secure your place at the conference and to facilitate our planning and organizational efforts.</p>
      <p style="font-family: Arial, sans-serif; font-size: 15px; color: #5072a7;">We look forward to your contribution and to the engaging discussions your research will undoubtedly inspire.</p>
      <p style="font-family: Arial, sans-serif; font-size: 15px; color: #5072a7;">Thank you once again for your submission, and we are excited to welcome you to in International Conference on Indian Education System for Global Development".</p>
      <p style="font-family: Arial, sans-serif; font-size: 15px; color: #5072a7;">Additionally, we have attached a QR code containing all the pertinent details for your convenience. Simply scan it to access the necessary information. If you have any questions or require further clarification, do not hesitate to reach out. We are here to support you every step of the way.</p>
      <p style="font-family: Arial, sans-serif; text-align: right; font-size: 14px; font-weight: bold; color:#a52a2a; ">Warm Regards</p>
      <p style="font-family: Arial, sans-serif; text-align: right; font-size: 14px; font-weight: bold; color:#a52a2a; ">Dr. Thakur SKR</p>
      <p style="font-family: Arial, sans-serif; text-align: right; font-size: 14px; font-weight: bold; color:#a52a2a; ">(Conference Director)</p>
      <p style="font-family: Arial, sans-serif; text-align: right; font-size: 14px; font-weight: bold; color:#a52a2a; ">Sci/Engr-SF, ISRO and Director, DHE & VBITR </p>
      <p style="font-family: Arial, sans-serif; text-align: right; font-size: 14px; font-weight: bold; color:#a52a2a; ">7903431900 | 1881234023 । rase@iitrpr.ac.in | info@rase.co.in | www.shikshamahakumbh.com</p>
      `, 
      attachments: [
        {
          filename: "qr.png",
          content: qrDataURL.split(";base64,").pop(),
          encoding: "base64",
        },
      ],
    };

    // Send mail
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Internal error" });
  }
}

export const dynamic = "force-static";