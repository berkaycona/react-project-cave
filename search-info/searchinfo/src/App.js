import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Navigate to line'ına gerek olmayadabilir sanırım */}
          <Route path="/Home" element={<Navigate to="/Home" />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
