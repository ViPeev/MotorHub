import { useLocation } from "react-router-dom";

export default function Create() {
  const [formData, setFormData] = useState({
    make: "all",
    model: "all",
    fuelType: "all",
    condition: "all",
    maxPower: "all",
    priceFrom: "all",
    priceUpTo: "all",
  });
  return (
    <main>
      <p style={{ color: "black" }}>gg</p>
    </main>
  );
}
