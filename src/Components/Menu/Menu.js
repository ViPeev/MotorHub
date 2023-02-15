import { useState } from "react";
import "./Menu.scss";

export default function Menu() {
  const [display, setDisplay] = useState(true);

  const displayHandler = (e) => {
    if(e.target == e.currentTarget){
        setDisplay((prev) => !prev);
    };
  };

  return display ? (
    <div className="backdrop" onClick={displayHandler}>
      <aside>
        <a href="#">Login</a>
        <a href="#">Register</a>
      </aside>
    </div>
  ) : null;
}
