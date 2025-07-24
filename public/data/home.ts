import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const homeData = {
  // To use your own photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
  // Of course it's best to convert your image file type to webp for better performance on the web!
  // The links are optional
  myImage: "/assets/my_image.jpeg",
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "azizkoumi7@gmail.com",
      Link: "/contact", // This refers to the Contact page in the website, you can change it to whatever you like
    },
    {
      Icon: FaLocationDot,
      Label: "Paris, France",
      Link: "https://maps.app.goo.gl/oFpFpTHuLT2wmnhW8", // This is just a simple location of my city
    },
    {
      Icon: FaPhoneAlt,
      Label: "+33 6 16 46 84 87 ",
      Link: "tel:+33616468487",
    },
  ],
  education: [
    {
      Icon: FaUniversity,
      Label: "INSTA Paris",
      Link: "https://www.insta.fr/",
    },
    {
      Icon: FaGraduationCap,
      Label: "Concepteur développeur d’applications",
      Link: "https://www.insta.fr/diplome-concepteur-developpeur-applications/",
    },
  ],
  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/lkwmy",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/aziz-koumi/",
    },
    {
      Icon: FaFacebook,
      Label: "Facebook",
      Link: "https://www.facebook.com/koumi.aziz",
    },
    {
      Icon: FaInstagram,
      Label: "Instagram",
      Link: "https://www.instagram.com/lkwmy__/",
    },
  ],
};
