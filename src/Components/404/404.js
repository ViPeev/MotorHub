import { Link } from "react-router-dom";
import image from "./images/404.gif";
import "./404.scss";

export default function NotFound() {
  return (
    <main>
      <div className="message-container">
        <p>The requested page could not be found !</p>
        <Link to="/">How about you start from here ?</Link>
      </div>
      <div className="image-container">
        <img src={image} alt="404" />
      </div>
    </main>
  );
}
