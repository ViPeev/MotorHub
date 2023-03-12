import styles from "./Edit.module.scss";
import EditForm from "./EditForm";

export default function Edit() {
  return (
    <main className={styles.main}>
      <section>
        <h2>Edit article</h2>
        <EditForm />
      </section>
    </main>
  );
}
