import { createContext } from "react";
import CarCard from "./CarCard";
import Controls from "../Controls/Controls";
import styles from "./CarList.module.scss";

export const ListContext = createContext(null);

export function CarList({ data, navigation, dispatch }) {
  return (
    <ListContext.Provider value={{ navigation, dispatch, data }}>
      <section>
        {data.cars.length > 0 ? (
          <>
            <Controls />
            <div className={styles["card-container"]}>
              {data.cars.map((current) => {
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
    </ListContext.Provider>
  );
}
