import { useLocation } from "react-router-dom";

export default function Catalogue() {
  const location = useLocation();
  const data = location.state?.data;
  console.log(location);
  return <main><p style={{color:"black"}}>gg</p></main>;
}
