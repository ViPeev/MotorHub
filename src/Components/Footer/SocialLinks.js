import facebookIcon from "./images/facebook.svg";
import githubIcon from "./images/github.svg";
import instagramIcon from "./images/instagram.svg";
import linkedinIcon from "./images/linkedin.svg";

const icons = [
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

export default function SocialLinks() {
  return (
    <div className="col social">
      <h3>Follow Us</h3>
      <ul className="social-icon-container">
        {icons.map((current) => (
          <Icon {...current} />
        ))}
      </ul>
    </div>
  );
}

function Icon({ name, link, icon }) {
  return (
    <li key={name}>
      <a href={link} target="_blank">
        <img src={icon} alt={name} />
      </a>
    </li>
  );
}
