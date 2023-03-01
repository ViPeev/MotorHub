import { Link } from "react-router-dom";
import RegisterForm from "../Forms/RegisterForm";
import styles from "./Auth.module.scss";

export default function RegisterPage() {
  return (
    <main className={styles.main}>
    <section>
    <h1>Register</h1>
    <RegisterForm style={styles}/>
    <p>Already have an account ? Sign-in <Link here to="/login">here</Link></p>
    </section>
  </main>
  );
}
