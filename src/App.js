import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Catalogue from "./Components/Catalogue/Catalogue";
import NotFound from "./Components/404/404";
import "./main-styles/App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Catalogue />} />
          <Route path="/sell" element={<main>sell</main>} />
          <Route path="/news" element={<main>news</main>} />
          <Route path="/forum" element={<main>forum</main>} />
          <Route path="/register" element={<main>register</main>} />
          <Route path="/login" element={<main>login</main>} />
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
