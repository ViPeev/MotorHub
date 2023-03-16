import CarCard from "./CarCard";
import Controls from "../Controls/Controls";
import styles from "./CarList.module.scss";

export default function CarList({
  data,
  perPage,
  setPerPage,
  page,
  setPage,
  sort,
  setSort,
  controls,
}) {
  return (
    <section>
      {data.cars.length > 0 ? (
        <>
          {controls && (
            <Controls
              perPage={perPage}
              setPerPage={setPerPage}
              items={data.count}
              page={page}
              setPage={setPage}
              sort={sort}
              setSort={setSort}
            />
          )}
          <div className={styles["card-container"]}>
            {data.cars.map((current) => {
              return <CarCard key={current._id} {...current} />;
            })}
          </div>
          {controls && (
            <Controls
              perPage={perPage}
              setPerPage={setPerPage}
              items={data.count}
              page={page}
              setPage={setPage}
              sort={sort}
              setSort={setSort}
            />
          )}
        </>
      ) : (
        <div className={`${styles.empty} fade-in`}>
          <p>No cars were found...</p>
        </div>
      )}
    </section>
  );
}
