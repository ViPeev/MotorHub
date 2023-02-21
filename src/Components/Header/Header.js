import Toggler from "./Toggler";
import PageNav from "../Navigation/PageNav";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <nav>
        <PageNav />
      </nav>
      <Toggler />
    </header>
  );
}
