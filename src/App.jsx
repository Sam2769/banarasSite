import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlacesToVisitPage from "./components/PlacesToVisitPage";
import Food from "./components/Food";
const App = () => {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sights" element={<PlacesToVisitPage />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
