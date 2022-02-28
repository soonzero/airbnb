import React from "react";
import Home from "./routes/Home";
import Covid from "./routes/Covid";
import Online from "./routes/Online";
import Host from "./routes/Host";
import Flex from "./routes/Flex";
import ScrollToTop from "./Components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./reset.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/online" element={<Online />} />
        <Route path="/host" element={<Host />} />
        <Route path="/flex" element={<Flex />} />
      </Routes>
    </Router>
  );
}

export default App;
