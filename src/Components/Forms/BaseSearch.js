import { useState } from "react";

import "./BaseSearch.scss";
import { cars } from "./formData";
import caret from "./images/caret-down-solid.svg";

const makes = Object.keys(cars);

function MakeOptions({ data }) {
  return (
    <>
      (
      {data.map((current) => (
        <option key={current} value={current}>
          {current}
        </option>
      ))}
      )
    </>
  );
}

export default function HomeSearch() {
  const [make, setMake] = useState("all");

  const makeChangeHandler = (e) => {
    setMake(e.target.value);
  };

  return (
    <section>
      <div className="form-wrapper">
        <form>
          <div className="input-group">
            <label htmlFor="makes">Make</label>
            <div className="custom-select">
              <select name="makes" id="makes" onChange={makeChangeHandler}>
                <option value="all" key="all">
                  All
                </option>
                <MakeOptions data={makes} />
              </select>
              <img src={caret} alt="arrow down" />
            </div>
          </div>
          <div className="input-group">
            <label>Model</label>
            <div className="custom-select">
              <select>
                <option value="all" key="all">
                  All
                </option>
                {make !== "all" ? <MakeOptions data={cars[make]} /> : null}
              </select>
              <img src={caret} alt="arrow down" />
            </div>
          </div>
          <div className="input-group">
            <label>Fuel Type</label>
            <div className="custom-select">
              <select>
                <option value="all" key="all">
                  All
                </option>
                <option value="used" key="used">
                  Used
                </option>
                <option value="new" key="new">
                  New
                </option>
              </select>
              <img src={caret} alt="arrow down" />
            </div>
          </div>
          <div className="input-group">
            <label>Condition</label>
            <div className="custom-select">
              <select>
                <option value="all" key="all">
                  Used & New
                </option>
                <option value="used" key="used">
                  Used
                </option>
                <option value="new" key="new">
                  New
                </option>
              </select>
              <img src={caret} alt="arrow down" />
            </div>
          </div>
          <div className="input-group">
            <label>Price from</label>
            <div className="custom-select">
              <select>
                <option value="all" key="all">
                  Any
                </option>
                <option value="used" key="used">
                  Used
                </option>
                <option value="new" key="new">
                  New
                </option>
              </select>
              <img src={caret} alt="arrow down" />
            </div>
          </div>
          <div className="input-group">
            <label>Price up to</label>
            <div className="custom-select">
              <select>
                <option value="all" key="all">
                  Any
                </option>
                <option value="used" key="used">
                  Used
                </option>
                <option value="new" key="new">
                  New
                </option>
              </select>
              <img src={caret} alt="arrow down" />
            </div>
          </div>
          <div className="input-group">
            <label>Max HP</label>
            <div className="custom-select">
              <select>
                <option value="all" key="all">
                  Any
                </option>
                <option value="used" key="used">
                  Used
                </option>
                <option value="new" key="new">
                  New
                </option>
              </select>
              <img src={caret} alt="arrow down" />
            </div>
          </div>
          <div className="input-group">
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    </section>
  );
}
