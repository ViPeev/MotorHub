import { useState } from "react";
import Menu from "../Menu/Menu";
import bars from "../../assets/icons/bars-solid.svg"

function Button({ handleClick }) {
  return (
    <button onClick={handleClick}>
      <img src={bars} alt="Open"/>
    </button>
  );
}

export default function Toggler() {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <>
      <Button handleClick={handleDisplay} />
      <Menu display={display} handleClick={handleDisplay} />
    </>
  );
}
