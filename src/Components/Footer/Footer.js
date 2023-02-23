import "./Footer.scss";
import CompanyLinks from "./CompanyLinks";
import SocialLinks from "./SocialLinks";
import data from "./linkData";

export default function Footer() {
  return (
    <footer className="footer">
      <CompanyLinks links={data.company} />
      <SocialLinks links={data.social}/>
    </footer>
  );
}
