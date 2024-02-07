import { BrowserRouter, Route, Routes } from "react-router-dom";
import Opening from "../components/opening";
import Home from "../pages/home";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
