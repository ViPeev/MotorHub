import { Link } from "react-router-dom";

const links = [
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

export default function CompanyLinks() {
  return (
    <div className="col company">
      <h3>Company</h3>
      <ul>
        {links.map((current) => (
          <li key={current.content}>
            <Link to={current.link}>{current.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
