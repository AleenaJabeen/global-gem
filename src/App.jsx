import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Package from "./pages/Package";
import Destinations from "./pages/Destinations";
import ScrollToTop from "./layout/ScrollToTop";
import Login from "./components/signup/Login";
import CreateAccount from "./components/signup/CreateAccount";
import DestinationDetailPage from "./components/home/DestinationDetailPage";
import CityListing from "./components/CityListing/CityListing";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="package" element={<Package />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<CreateAccount />} />
            <Route path="detail" element={<DestinationDetailPage />} />
            <Route path="city-listing" element={<CityListing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
