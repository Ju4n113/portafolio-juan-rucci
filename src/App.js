import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import TimeLine from './components/TimeLine';
import VideoSection from './components/Presentation';
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <main>
              <section className="section"><Banner /></section>
              <section className="section"><Skills /></section>
              <section className="section"><Projects /></section>
              <section className="section"><VideoSection /></section>
              <section className="section"><Contact /></section>
            </main>
          } />
          <Route path="/timeline" element={
            <section className="timeline">
              <TimeLine />
            </section>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
