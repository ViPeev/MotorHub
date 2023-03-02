import LoginForm from "../Forms/LoginForm";
import styles from "./Auth.module.scss";
import { Link } from "react-router-dom";
import c63 from "../../assets/images/c63.jpg"

export default function LoginPage() {
  return (
    <main className={styles.main}>
      <section>
        <div className={styles["side-image"]}>
          <img src={c63} alt="Mercedes-AMG C63" />
        </div>
        <div>
          <h1>Login</h1>
          <LoginForm style={styles} />
          <p>
            Don't have an account ? Register{" "}
            <Link here to="/register">
              here
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
