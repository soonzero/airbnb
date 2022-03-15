import React from "react";
import Home from "./routes/Home";
import Covid from "./routes/Covid";
import Online from "./routes/Online";
import Host from "./routes/Host";
import FlexWood from "./pages/FlexWood";
import FlexFarm from "./pages/FlexFarm";
import FlexPool from "./pages/FlexPool";
import FlexBeach from "./pages/FlexBeach";
import FlexSmall from "./pages/FlexSmall";
import FlexCastle from "./pages/FlexCastle";
import ScrollToTop from "./Components/ScrollToTop";
import rootReducer from "./reducers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./reset.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Search from "./routes/Search";
import Wishlists from "./routes/Wishlists";
import Login from "./routes/Login";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/online" element={<Online />} />
          <Route path="/host" element={<Host />} />
          <Route path="/search" element={<Search />} />
          <Route path="/wishlists" element={<Wishlists />} />
          <Route path="/login" element={<Login />} />
          <Route path="/flex/farm" element={<FlexFarm />} />
          <Route path="/flex/pool" element={<FlexPool />} />
          <Route path="/flex/beach" element={<FlexBeach />} />
          <Route path="/flex/small" element={<FlexSmall />} />
          <Route path="/flex/wood" element={<FlexWood />} />
          <Route path="/flex/castle" element={<FlexCastle />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
