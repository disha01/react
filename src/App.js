
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>

      <Router>
        <Navbar title="textutil" />

        <Routes>
          <Route path="/About" element={<About />} />


          <Route path="/" element={<Textform />} />
          

        </Routes>

      </Router>



    </>
  );
}

export default App;
