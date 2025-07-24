import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export const receiver_email = "azizkoumi7@gmail.com"; // Your email for recieving emails using the email service.
// The emails are sent using a personally developed email api: https://github.com/KareemEhab/email-sender
// Feel free to clone the email service as well and deploy your own, you'll find all the steps in the README there.
// Make sure to update /src/utils/sendEmail.ts with your own deployed link.

export const contactInfo = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+33616468487",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+33616468487",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "https://github.com/lkwmy",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/aziz-koumi",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    value: "https://www.facebook.com/koumi.aziz",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "https://www.instagram.com/lkwmy__",
  },
];
