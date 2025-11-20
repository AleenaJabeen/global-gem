import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import BookingSummary from "./components/profile/BookingSummary";
import ChatBox from "./components/travelerView/ChatBox";
import GuideProfile from './components/travelerView/GuideProfile';
import TravelerProfileGuide from "./components/hostView/TravelerProfileGuide";
import ProfilePage from './components/profile/ProfilePage'
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="package" element={<Package />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<CreateAccount />} />
          <Route path="detail" element={<DestinationDetailPage />} />
          <Route path="city-listing" element={<CityListing />} />
          {/* Protected Routes — only visible when logged in */}
          {isLoggedIn && (
            <>
              <Route path="profile" element={<ProfilePage />} />
              <Route path="booking-summary" element={<BookingSummary />} />
              <Route path="inbox" element={<ChatBox />} />
              <Route path="view-profile" element={<GuideProfile />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
