import React from "react";
import Home from "./routes/Home";
import Covid from "./routes/Covid";
import Online from "./routes/Online";
import Host from "./routes/Host";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./reset.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/online" element={<Online />} />
        <Route path="/host" element={<Host />} />
      </Routes>
    </Router>
  );
}

export default App;
