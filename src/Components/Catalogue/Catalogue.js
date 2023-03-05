import AdvancedSearch from "../Forms/CatalogSearch";
import CarList from "../Misc/CarList/CarList";
import styles from "./Catalogue.module.scss";

export default function Catalogue() {
  window.scrollTo(0, 0);

  return (
    <main className={styles.main}>
      <AdvancedSearch />
      <CarList />
    </main>
  );
}
