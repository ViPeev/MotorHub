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
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
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

function InputField({ label, value, name, changeHandler, type }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type={type}
          min="0"
          step="100"
          value={value}
          name={name}
          id={name}
          onChange={changeHandler}
          placeholder={`Enter value`}
        />
      </div>
    </div>
  );
}

export { Select, InputField };
