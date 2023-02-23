export default function SocialLinks({ links }) {
  return (
    <div className="col social">
      <h3>Follow Us</h3>
      <ul className="social-icon-container">
        {links.map((current) => (
          <Icon key={current.name} {...current} />
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
