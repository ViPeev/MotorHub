import AdvancedSearch from "../Forms/CatalogSearch";
import CarList from "./CarList";
import styles from "./Catalogue.module.scss";

export default function Catalogue() {
  return (
    <main className={styles.main}>
      <AdvancedSearch />
      <CarList />
    </main>
  );
}
