import CarCard from "./CarCard";
import Controls from "../Controls/Controls";
import styles from "./CarList.module.scss";

export default function CarList({ cars }) {
  return (
    <section>
      {cars.length > 0 ? (
        <>
          <Controls />
          <div className={styles["card-container"]}>
            {cars.map((current) => {
              return <CarCard key={current._id} {...current} />;
            })}
          </div>
          <Controls />
        </>
      ) : (
        <div className={`${styles.empty} fade-in`}>
          <p>No cars were found...</p>
        </div>
      )}
    </section>
  );
}
