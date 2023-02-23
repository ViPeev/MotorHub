import facebookIcon from "./images/facebook.svg";
import githubIcon from "./images/github.svg";
import instagramIcon from "./images/instagram.svg";
import linkedinIcon from "./images/linkedin.svg";

const social = [
  {
    icon: facebookIcon,
    link: "https://www.facebook.com/profile.php?id=100000745620405",
    name: "facebook",
  },
  {
    icon: instagramIcon,
    link: "https://www.instagram.com/vipeev_/",
    name: "instagram",
  },
  {
    icon: githubIcon,
    link: "https://github.com/ViPeev",
    name: "github",
  },
  {
    icon: linkedinIcon,
    link: "https://www.linkedin.com/in/vladislav-peev-850b0724a/",
    name: "linkedin",
  },
];

const company = [
  {
    link: "/about",
    content: "About Us",
  },
  {
    link: "/contact",
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
