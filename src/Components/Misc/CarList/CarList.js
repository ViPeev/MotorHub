import CarCard from "./CarCard";
import Controls from "../Controls/Controls";
import styles from "./CarList.module.scss";


export default function CarList({ cars }) {
  return (
    <section>
      <Controls />
      <div className={styles["card-container"]}>
        {cars.map((current) => {
          return <CarCard key={current._id} {...current} />;
        })}
      </div>
      <Controls />
    </section>
  );
}
