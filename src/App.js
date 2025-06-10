import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import WhyMe from "./WhyMe";
import PersonalityShowcase from "./PersonalityShowcase";
import WhatDoYouThink from "./WhatDoYouThink"; // <-- Import new page

function App() {
  return (
    <Router name="/outing">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-me" element={<WhyMe />} />
        <Route path="/personality" element={<PersonalityShowcase />} />{" "}
        <Route path="/what-do-you-think" element={<WhatDoYouThink />} />
      </Routes>
    </Router>
  );
}

export default App;
