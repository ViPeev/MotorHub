import { memo, useState } from "react";
import Menu from "../Menu/Menu";
import bars from "../../assets/icons/bars-solid.svg";

const Button = memo(function Button({ setDisplay, display }) {

  return (
    <button
      aria-expanded={display}
      aria-controls="side-menu"
      id="side-menu-toggler"
      onClick={() => setDisplay((prev) => !prev)}
    >
      <img src={bars} alt="Open Menu" />
    </button>
  );
});

const Toggler = memo(function Toggler() {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <Button setDisplay={setDisplay} display={display} />
      {display && <Menu setDisplay={setDisplay} />}
    </>
  );
});

export { Toggler };
