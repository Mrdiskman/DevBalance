import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage"
import BankPage from "../pages/bankPage"

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/bank" element={<BankPage/>} />
  </Routes>
  
);
export default RoutesMain;