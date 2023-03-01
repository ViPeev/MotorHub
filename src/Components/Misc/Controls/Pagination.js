import anglesLeft from "../../../assets/icons/angles-left-solid.svg";
import anglesRight from "../../../assets/icons/angles-right-solid.svg";
import angleLeft from "../../../assets/icons/angle-left-solid.svg";
import angleRight from "../../../assets/icons/angle-right-solid.svg";
import styles from "./Controls.module.scss";

export default function Pagination() {
  const pages = [1, 2, 3, 4, 5, 6];
  let currentPage = 3;

  return (
    <div className={styles["pagination-container"]}>
      <button>
        <img src={anglesLeft} alt="First" />
      </button>
      <button>
        <img src={angleLeft} alt="Previous" />
      </button>
      {pages.map((current) => {
        if (current === currentPage) {
          return (
            <button className={styles["active-page"]} key={current}>
              {current}
            </button>
          );
        }
        return <button key={current}>{current}</button>;
      })}
      <button>
        <img src={angleRight} alt="Next" />
      </button>
      <button>
        <img src={anglesRight} alt="Last" />
      </button>
    </div>
  );
}
