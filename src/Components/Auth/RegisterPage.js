import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import styles from "./Auth.module.scss";
import m4 from "../../assets/images/m4.jpg"

export default function RegisterPage() {
  return (
    <main className={`${styles.main} fade-in`}>
      <section>
        <div>
          <h1>Register</h1>
          <RegisterForm style={styles} />
          <p>
            Already have an account? Sign-in{" "}
            <Link to="/login">
              here
            </Link>
          </p>
        </div>
        <div className={styles["side-image"]}>
          <img src={m4} alt="BMW M4" />
        </div>
      </section>
    </main>
  );
}
