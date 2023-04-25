import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Teachers from "./components/team/Team";
import Contact from "./components/communication/Contact";
import HomePage from "./components/Home";
import Footer from "./components/Footer";
import Events from "./components/events/Events";
import Login from "./components/Login";
import Vacancies from "./components/Vacancies";
import Uniform from "./components/uniform/Uniform";
import Gallery from "./components/gallery/Gallery";
import Dashboard from "./components/Dashboard";
import { useNavigate } from "react-router-dom";
import Register from "./components/Register";

function App() {
  const history = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="">
      <React.Fragment>
        <header className="">
          <Navbar />
        </header>
        <main className="container min-h-screen mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/uniform" element={<Uniform />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <footer className="mt-20">
          <Footer />
        </footer>
      </React.Fragment>
    </div>
  );
}

export default App;
