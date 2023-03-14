import { useState } from "react";
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
  handleChange,
  options,
  firstOption,
  symbol,
}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <select value={value} name={name} id={name} onChange={handleChange}>
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

function InputField({ label, value, name, handleChange, type, placeholder }) {
  const content = placeholder || "";

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type={type}
          min={0}
          value={value}
          name={name}
          id={name}
          onChange={handleChange}
          placeholder={content}
        />
      </div>
    </div>
  );
}

function ValidatedInput({
  label,
  value,
  name,
  handleChange,
  type,
  placeholder,
  message,
  validator,
}) {
  const [interacted, setInteracted] = useState(false);

  const content = placeholder || "";

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type={type}
          min={0}
          value={value}
          name={name}
          id={name}
          onChange={handleChange}
          onBlur={() => setInteracted(true)}
          placeholder={content}
        />
      </div>
      <span>{!validator && interacted && message}</span>
    </div>
  );
}

function SortSelect({ label, value, name, handleChange, options }) {
  return (
    <form>
      <label htmlFor={name}>{label} : </label>
      <select value={value} name={name} id={name} onChange={handleChange}>
        {options.map((current) => {
          return (
            <option key={current.value} value={current.value}>
              {current.name}
            </option>
          );
        })}
      </select>
    </form>
  );
}

function CreateSelect({
  label,
  value,
  name,
  handleChange,
  options,
  symbol,
  message,
  validator,
}) {
  const [interacted, setInteracted] = useState(false);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <select
          value={value}
          name={name}
          id={name}
          onChange={handleChange}
          onBlur={() => setInteracted(true)}
        >
          <option value=""></option>
          {options && <Options data={options} symbol={symbol} />}
          <option value="other">Other</option>
        </select>
        <img src={caret} alt="arrow down" />
      </div>
      <span>{!validator && interacted && message}</span>
    </div>
  );
}

function TextArea({ label, value, name, handleChange, message, validator }) {
  const [interacted, setInteracted] = useState(false);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <textarea
          name={name}
          id={name}
          cols="30"
          rows="10"
          onChange={handleChange}
          onBlur={() => setInteracted(true)}
          value={value}
        />
      </div>
      <span>{!validator && interacted && message}</span>
    </div>
  );
}

export {
  Select,
  InputField,
  SortSelect,
  CreateSelect,
  TextArea,
  ValidatedInput,
};
