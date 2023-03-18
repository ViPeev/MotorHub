import { useState } from "react";
import Menu from "../Menu/Menu";
import bars from "../../assets/icons/bars-solid.svg"

function Button({ setDisplay }) {
  return (
    <button onClick={() => setDisplay((prev) => !prev)}>
      <img src={bars} alt="Open"/>
    </button>
  );
}

export default function Toggler() {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <Button setDisplay={setDisplay} />
      {display && 
      <Menu setDisplay={setDisplay} />
      }
    </>
  );
}
