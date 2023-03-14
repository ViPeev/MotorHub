import styles from "./Footer.module.scss";

export default function SocialLinks({ links }) {
  return (
    <div className={styles.social}>
      <h3>Follow Us</h3>
      <ul>
        {links.map((current) => (
          <Icon key={current.name} {...current} />
        ))}
      </ul>
    </div>
  );
}

function Icon({ name, link, icon }) {
  return (
    <li>
      <a href={link} target="_blank">
        <img src={icon} alt={name} title={name} />
      </a>
    </li>
  );
}
