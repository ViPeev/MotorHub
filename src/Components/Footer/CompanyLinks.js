import { Link } from "react-router-dom";

export default function CompanyLinks({ links }) {
  return (
    <div>
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
