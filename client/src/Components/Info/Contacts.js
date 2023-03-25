import email from "../../assets/icons/at-solid.svg";
import phone from "../../assets/icons/phone-solid.svg";
import map from "../../assets/icons/map-location-dot-solid.svg";
import styles from "./Info.module.scss";

export default function Contacts() {
  window.scrollTo({ top: 0 });

  return (
    <main>
      <div className={`${styles.container} fade-in`}>
        <h1>Contact us</h1>
        <div className={styles["contact-data"]}>
          <section>
            <h2>MotorHub&trade;</h2>
            <div>
              <img src={map} title="Location" alt="Location" />
              <span>
                495 Alexander Malinov Blvd, Mladost 4, Sofia, Bulgaria
              </span>
            </div>
            <div>
              <img src={phone} title="Phone Number" alt="Phone Number" />
              <span>+359 876 123 456</span>
            </div>
            <div>
              <img src={email} title="E-mail" alt="E-mail" />
              <span>
                <a href="mailto:vladislavpeev9412@gmail.com">
                  vladislavpeev9412@gmail.com
                </a>
              </span>
            </div>
          </section>
          <section>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.329289456792!2d23.36799953290252!3d42.633178659184196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa86c811719f89%3A0x4e33370b094429d0!2z0LHRg9C7LiDigJ7QkNC70LXQutGB0LDQvdC00YrRgCDQnNCw0LvQuNC90L7QsuKAnCA0OTUsIDE3MTUg0LIu0LcuINCQ0LzQtdGA0LjQutCw0L3RgdC60Lgg0LrQvtC70LXQtiwg0KHQvtGE0LjRjw!5e0!3m2!1sbg!2sbg!4v1679518708760!5m2!1sbg!2sbg"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </section>
        </div>
      </div>
    </main>
  );
}
