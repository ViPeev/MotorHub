import facebookIcon from "../../assets/icons/facebook.svg";
import githubIcon from "../../assets/icons/github.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

const social = [
  {
    icon: facebookIcon,
    link: "https://www.facebook.com/profile.php?id=100000745620405",
    name: "Facebook",
  },
  {
    icon: instagramIcon,
    link: "https://www.instagram.com/vipeev_/",
    name: "Instagram",
  },
  {
    icon: githubIcon,
    link: "https://github.com/ViPeev",
    name: "GitHub",
  },
  {
    icon: linkedinIcon,
    link: "https://www.linkedin.com/in/vladislav-peev-850b0724a/",
    name: "Linkedin",
  },
];

const company = [
  {
    link: "/about",
    content: "About Us",
  },
  {
    link: "/contacts",
    content: "Contact us",
  },
  {
    link: "/tos",
    content: "Terms of Service",
  },
  {
    link: "/privacy",
    content: "Privacy Policy",
  },
];

export default { social, company };
