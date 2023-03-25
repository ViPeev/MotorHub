import { memo, useState } from "react";
import Menu from "../Menu/Menu";
import bars from "../../assets/icons/bars-solid.svg";

const Button = memo(function Button({ setDisplay }) {
  return (
    <button onClick={() => setDisplay((prev) => !prev)}>
      <img src={bars} alt="Open" />
    </button>
  );
});

const Toggler = memo(function Toggler() {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <Button setDisplay={setDisplay} />
      {display && <Menu setDisplay={setDisplay} />}
    </>
  );
});

export { Toggler };
