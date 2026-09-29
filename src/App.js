import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <h1>Welcome to My Website</h1>
      <p>
        This website is created for Advanced Web Technology
        Experiment No. 9.
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About Website</h1>
      <p>
        This website demonstrates React routing and GitHub Pages
        hosting.
      </p>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="app">

        <nav className="navbar">

          <div className="logo">
            AWT<span>.</span>
          </div>

          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>

        </nav>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={<About />}
          />

        </Routes>

      </div>
    </HashRouter>
  );
}

export default App;