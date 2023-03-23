import styles from "./Info.module.scss";
import vladislav from "../../assets/images/creator.jpg";

export default function About() {
  window.scrollTo({ top: 0 });

  return (
    <main className={`${styles["about-container"]} fade-in`}>
      <section>
        <h1>About us</h1>
        <p>
          A pinch of automotive enthusiasm, some coding knowledge, the need
          for a course project, and there you have it - MotorHub.
        </p>
        <p>
          MotorHub is a single-page application built with <span>M</span>ongoDB,{" "}
          <span>E</span>xpress, <span>R</span>eact, and <span>N</span>odeJS.
        </p>
        <p>
          It's a web application for publishing car deals on the internet. The
          sole purpose of it is coding exercise.
        </p>
        <p>
          All of the contents are fictional, including the published cars,
          users, Terms of Service, and Privacy policy.
        </p>
        <p>MotorHub was created by Vladislav Peev</p>
        <img src={vladislav} alt="V.Peev" />
      </section>
    </main>
  );
}
