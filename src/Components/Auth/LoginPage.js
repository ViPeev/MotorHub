import LoginForm from "../Forms/LoginForm";
import styles from "./Auth.module.scss";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <main className={styles.main}>
      <section>
        <h1>Login</h1>
        <LoginForm style={styles} />
        <p>
          Don't have an account ? Register{" "}
          <Link here to="/register">
            here
          </Link>
        </p>
      </section>
    </main>
  );
}
