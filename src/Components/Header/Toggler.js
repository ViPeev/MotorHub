import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Toggler(props) {
  return (
    <button>
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
}
