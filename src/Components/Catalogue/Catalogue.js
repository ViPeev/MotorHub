import { useEffect, useReducer, useState } from "react";
import AdvancedSearch from "../Forms/CatalogSearch";
import styles from "./Catalogue.module.scss";

export default function Catalogue() {

  return (
      <main className={styles.main}>
        <AdvancedSearch />
        <section className={styles["card-container"]}>

        </section>
      </main>
  );
}
