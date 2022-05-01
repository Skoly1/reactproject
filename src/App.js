import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddTrailer from "./components/AddTrailer/AddTrailer";
import LatestTrailers from "./components/LatestTrailers/LatestTrailers";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";

import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latestmarveltrailers" element={<LatestTrailers />} />
          <Route path="/addtrailer" element={<AddTrailer />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
