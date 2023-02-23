import { useState } from "react";
import Menu from "../Menu/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Button({ clickHandler }) {
  return (
    <button onClick={clickHandler}>
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
}

export default function Toggler() {
  const [display, setDisplay] = useState(false);

  const displayHandler = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <>
      <Button clickHandler={displayHandler} />
      <Menu display={display} clickHandler={displayHandler} />
    </>
  );
}
