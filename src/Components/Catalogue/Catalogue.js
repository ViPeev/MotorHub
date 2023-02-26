import { useEffect, useReducer, useState } from "react";
import AdvancedSearch from "../Forms/CatalogSearch";
import Card from "./Card";
import styles from "./Catalogue.module.scss";

import audi1 from "../../assets/images/audi1.jpg";
import audi2 from "../../assets/images/audi2.jpg";
import audi3 from "../../assets/images/audi3.jpg";

const images = [audi1,audi2,audi3];

export default function Catalogue() {
  return (
    <main className={styles.main}>
      <AdvancedSearch />
      <section className={styles["card-container"]}>
        <Card images={images}/>
        <Card images={images}/>
        <Card images={images}/>
        <Card images={images}/>
        <Card images={images}/>
        <Card images={images}/>
        <Card images={images}/>
        <Card images={images}/>
        <Card images={images}/>
        <Card images={images}/>
        <Card images={images}/>
        <Card images={images}/>
      </section>
    </main>
  );
}
