import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import SinglePage from "./pages/SinglePage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Navigate to line'ına gerek olmayadabilir sanırım */}
          <Route path="/Home" element={<Navigate to="/Home" />} />
          <Route path="/" element={<Home />} />
          <Route path="/myitem/:myyid" element={<SinglePage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
