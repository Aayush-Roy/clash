// import nodemailer from "nodemailer";
// const transporter = nodemailer.createTransport({
//   // host:process.env.SMTP_HOST,
//   host: process.env.SMTP_HOST as string,
//   port: process.env.SMTP_PORT,
//   secure: false, // Use true for port 465, false for port 587
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASSWORD,
//   },
// });



// // export const sendEmail = async(to:string,subject:string, body:string)=>{
// //     await transporter.sendMail({
// //         from:process.env.FROM_EMAIL,
// //         to:to,
// //         subject:subject,
// //         html:body,
// //     })
// // }
// export const sendEmail = async (to, subject, body) => {
//   try {
//     const info = await transporter.sendMail({
//       from: process.env.FROM_EMAIL,
//       to,
//       subject,
//       html: body,
//     });

//     console.log("EMAIL SENT:", info.messageId);
//   } catch (err) {
//     console.error("EMAIL ERROR:", err);
//   }
// };

import nodemailer from "nodemailer";
// import SMTPTransport from "nodemailer/lib/smtp-transport";
import SMTPTransport from "nodemailer/lib/smtp-transport/index.js";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
} as SMTPTransport.Options);

export const sendEmail = async (
  to: string,
  subject: string,
  body: string
): Promise<void> => {
  try {
    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to,
      subject,
      html: body,
    });

    console.log("EMAIL SENT:", info.messageId);
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    throw err;   //
  }
};