import caret from "../../assets/icons/caret-down-solid.svg";

function Options({ data, symbol }) {
  return (
    <>
      (
      {data.map((current) => (
        <option key={current} value={current}>
          {current} {symbol}
        </option>
      ))}
      )
    </>
  );
}

function Select({
  label,
  value,
  name,
  changeHandler,
  options,
  firstOption,
  symbol,
}) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <div className="custom-select">
        <select value={value} name={name} id={name} onChange={changeHandler}>
          <option value="all">{firstOption}</option>
          {options ? (
            <>
              <Options data={options} symbol={symbol} />
              {firstOption === "All" ? (
                <option value="other">Other</option>
              ) : null}
            </>
          ) : null}
        </select>
        <img src={caret} alt="arrow down" />
      </div>
    </div>
  );
}

export { Select };
