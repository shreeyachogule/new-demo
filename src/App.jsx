import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/home" element={<Home/>} />
          </Routes>
        </Router>
    </div>
  )
}

export default App