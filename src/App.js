import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

import "./main-styles/App.scss";

import { Skeleton } from "./Components/Misc/Loaders/Loaders";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PrivateRoute from "./Components/Guards/Private";
import PublicRoute from "./Components/Guards/PublicOnly";
import OwnerRoute from "./Components/Guards/OwnerOnly";
import Edit from "./Components/Edit/Edit";
import CarDetails from "./Components/Details/CarDetails";
import { SearchProvider } from "./contexts/SearchContext";

const Home = React.lazy(() => import("./Components/Home/Home"));
const Catalogue = React.lazy(() => import("./Components/Catalogue/Catalogue"));
const Create = React.lazy(() => import("./Components/Create/Create"));
const UserProfile = React.lazy(() => import("./Components/Profile/UserProfile"));
const LoginPage = React.lazy(() => import("./Components/Auth/LoginPage"));
const RegisterPage = React.lazy(() => import("./Components/Auth/RegisterPage"));
const Logout = React.lazy(() => import("./Components/Auth/Logout"));
const NotFound = React.lazy(() => import("./Components/404/404"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchProvider>

          <Header />
          <Routes>
            <Route path="/" element={<Suspense fallback={<Skeleton height={"suspense"} />}><Home /></Suspense>} />
            <Route path="/cars" element={<Suspense fallback={<Skeleton height={"suspense"} />}><Catalogue /></Suspense>} />
            <Route path="/news" element={<main>news</main>} />
            <Route path="/forum" element={<main>forum</main>} />
            <Route path="/details/:id" element={<CarDetails />} />

            <Route element={<PrivateRoute />}>
              <Route path="/sell" element={<Suspense fallback={<Skeleton height={"suspense"} />}><Create /></Suspense>} />
              <Route path="/logout" element={<Suspense fallback={<Skeleton height={"suspense"} />}><Logout /></Suspense>} />
              <Route path="/profile" element={<Suspense fallback={<Skeleton height={"suspense"} />}><UserProfile /></Suspense>} />

              <Route element={<OwnerRoute />}>
                <Route path="/edit/:id" element={<Edit />} />
              </Route>
            </Route>

            <Route element={<PublicRoute />}>
              <Route path="/register" element={<Suspense fallback={<Skeleton height={"suspense"} />}><RegisterPage /></Suspense>} />
              <Route path="/login" element={<Suspense fallback={<Skeleton height={"suspense"} />}><LoginPage /></Suspense>} />
            </Route>
            <Route path="*" element={<Suspense fallback={<Skeleton height={"suspense"}></Skeleton>}><NotFound /></Suspense>} />
          </Routes>
          <Footer />

        </SearchProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
