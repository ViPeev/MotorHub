import anglesLeft from "../../../assets/icons/angles-left-solid.svg";
import anglesRight from "../../../assets/icons/angles-right-solid.svg";
import angleLeft from "../../../assets/icons/angle-left-solid.svg";
import angleRight from "../../../assets/icons/angle-right-solid.svg";
import styles from "./Controls.module.scss";

export default function Pagination({ perPage, items, page, setPage }) {
  const pageCount = Math.ceil(items / perPage);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  const handleClick = (pageNum) => {
    if (pageNum < 1) {
      pageNum = 1;
    }
    if (pageNum > pageCount) {
      pageNum = pageCount;
    }
    setPage(pageNum);
  };

  return (
    <div className={styles["pagination-container"]}>
      <button onClick={handleClick.bind(null, 1)}>
        <img src={anglesLeft} alt="First" />
      </button>
      <button onClick={handleClick.bind(null, page - 1)}>
        <img src={angleLeft} alt="Previous" />
      </button>
      {pages.map((current) => {
        let active = "";
        if (current === page) {
          active = styles["active-page"];
        }
        return (
          <button
            key={current}
            className={active}
            onClick={handleClick.bind(null, current)}>
            {current}
          </button>
        );
      })}
      <button onClick={handleClick.bind(null, page + 1)}>
        <img src={angleRight} alt="Next" />
      </button>
      <button onClick={handleClick.bind(null, pageCount)}>
        <img src={anglesRight} alt="Last" />
      </button>
    </div>
  );
}
