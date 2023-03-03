import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Catalogue from "./Components/Catalogue/Catalogue";
import NotFound from "./Components/404/404";
import "./main-styles/App.scss";
import CarDetails from "./Components/Details/CarDetails";
import LoginPage from "./Components/Auth/LoginPage";
import RegisterPage from "./Components/Auth/RegisterPage";
import Create from "./Components/Create/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Catalogue />} />
          <Route path="/sell" element={<Create />} />
          <Route path="/details/:id" element={<CarDetails />} />
          <Route path="/news" element={<main>news</main>} />
          <Route path="/forum" element={<main>forum</main>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<main>Profile</main>} />
          <Route path="/logout" element={<main>logout</main>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
