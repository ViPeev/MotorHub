import Toggler from "./Toggler";
import "./Header.scss";
import logo from "./images/logo.png";

export default function Header(props) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">
              <img src="" alt="MotorHub Logo" />
            </a>
          </li>
          <li>
            <a href="#">Cars for Sale</a>
          </li>
          <li>
            <a href="#">Sell your car</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
        <Toggler />
    </header>
  );
}
