import React from "react";
import "./App.css";
import lake from "./images/image-of-lake.jpeg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Use the default import here
import Google from "./components/Google";
import Home from "./components/Home";
//import Home from "./components/Home";
function App() {
  return (
    <>
      <div className="App" style={{ backgroundImage: `url(${lake})` }}>
        <div>
          <h1>App</h1>
        </div>
        <Router>
          <div className="drawer">
            <Navbar />
            <div className="content-wrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/google-products" element={<Google />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
