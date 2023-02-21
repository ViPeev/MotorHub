import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Menu from "../Menu/Menu";

export default function Toggler() {
  const [display, setDisplay] = useState(false);

  const displayHandler = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <>
      <button onClick={displayHandler}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <Menu display={display} displayHandler={displayHandler} />
    </>
  );
}
