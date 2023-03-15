import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./main-styles/App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Catalogue from "./Components/Catalogue/Catalogue";
import NotFound from "./Components/404/404";
import CarDetails from "./Components/Details/CarDetails";
import LoginPage from "./Components/Auth/LoginPage";
import Logout from "./Components/Auth/Logout";
import RegisterPage from "./Components/Auth/RegisterPage";
import Create from "./Components/Create/Create";
import Edit from "./Components/Edit/Edit";
import UserProfile from "./Components/Profile/UserProfile";
import PrivateRoute from "./Components/Guards/Private";
import PublicRoute from "./Components/Guards/PublicOnly";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Catalogue />} />
          <Route path="/news" element={<main>news</main>} />
          <Route path="/forum" element={<main>forum</main>} />
          <Route path="/details/:id" element={<CarDetails />} />

          <Route element={<PrivateRoute />}>
            <Route path="/sell" element={<Create />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<UserProfile />} />
            
            <Route path="/edit/:id" element={<Edit />} />
          </Route>

          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
