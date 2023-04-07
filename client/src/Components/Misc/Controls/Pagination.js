import { useContext } from "react";
import { ListContext } from "../CarList/CarList";
import anglesLeft from "../../../assets/icons/angles-left-solid.svg";
import anglesRight from "../../../assets/icons/angles-right-solid.svg";
import angleLeft from "../../../assets/icons/angle-left-solid.svg";
import angleRight from "../../../assets/icons/angle-right-solid.svg";
import styles from "./Controls.module.scss";

export default function Pagination() {
  const { navigation, dispatch, data } = useContext(ListContext);

  const pageCount = Math.ceil(data.count / navigation.perPage);
  const currentPage = navigation.page;
  const pages = [];

  let start = Math.max(1, currentPage - 1);
  if (currentPage === pageCount) {
    start = pageCount - 2;
  }
  let end = Math.min(pageCount, currentPage + 1);
  if (currentPage === 1) {
    end = currentPage + 2;
  }

  for (let i = Math.max(1, start); i <= Math.min(end, pageCount); i++) {
    pages.push(i);
  }

  const handleClick = (pageNum) => {
    let index = pageNum < 1 ? 1 : pageNum > pageCount ? pageCount : pageNum;
    if (index === currentPage) return;

    dispatch({ type: "SET_PAGE", payload: index });
  };

  return (
    <div className={styles["pagination-container"]}>
      <button onClick={handleClick.bind(null, 1)}>
        <img src={anglesLeft} alt="First" className="invert-medium" />
      </button>
      <button onClick={handleClick.bind(null, currentPage - 1)}>
        <img src={angleLeft} alt="Previous" className="invert-medium" />
      </button>
      {pages.slice(0, 3).map((current) => {
        let active = "";
        if (current === currentPage) {
          active = styles["active-page"];
        }
        return (
          <button
            key={current}
            className={active}
            onClick={handleClick.bind(null, current)}
          >
            {current}
          </button>
        );
      })}
      {currentPage < pageCount - 1 && pageCount > 3 && (
        <>
          {currentPage < pageCount - 2 && pageCount > 4 && (
            <span>....</span>
          )}
          <button onClick={handleClick.bind(null, pageCount)}>
            {pageCount}
          </button>
        </>
      )}
      <button onClick={handleClick.bind(null, currentPage + 1)}>
        <img src={angleRight} alt="Next" className="invert-medium" />
      </button>
      <button onClick={handleClick.bind(null, pageCount)}>
        <img src={anglesRight} alt="Last" className="invert-medium" />
      </button>
    </div>
  );
}
