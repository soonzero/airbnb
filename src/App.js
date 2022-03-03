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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./reset.css";
import { Provider } from "react-redux";
import { createStore } from "redux";

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      login: false,
      text: "로그인",
    };
  }

  const newState = { ...currentState };
  if (action.type === "LOGIN_SUCCESS") {
    newState.login = true;
    newState.text = "로그아웃";
  } else if (action.type === "LOGOUT_SUCCESS") {
    newState.login = false;
    newState.text = "로그인";
  }
  return newState;
}

const store = createStore(reducer);

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
