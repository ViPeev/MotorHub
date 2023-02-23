import caret from "./images/caret-down-solid.svg";

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

function Select({ label, value, changeHandler, options, firstOption, symbol }) {
  return (
    <div className="input-group">
      <label htmlFor={value}>{label}</label>
      <div className="custom-select">
        <select name={value} id={value} onChange={changeHandler}>
          <option value="all">{firstOption}</option>
          {options ? (
            <>
              <Options data={options} symbol={symbol}/>
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
