import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Teachers from "./components/team/Team";
import Contact from "./components/communication/Contact";
import HomePage from "./components/Home";
import Footer from "./components/Footer";
import Events from "./components/events/Events";
import Uniform from "./components/uniform/Uniform";
import Gallery from "./components/gallery/Gallery";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/users/Login";
import ForgotPassword from "./components/users/ForgotPasswordFrom";
import { ResetPassword } from "./components/users/ResetPassword";

function App() {
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
            <Route path="/team" element={<Teachers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/uniform" element={<Uniform />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
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
