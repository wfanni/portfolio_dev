import './App.css';

import Navbar from './components/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Works from './components/Works/Works.jsx';
import Contact from './components/Contact/Contact.jsx';

import mobile from './components/media/mobile.png';


export default function App() {
  return (
    <>
      <h3 id="alert">Mobile version is on the way...
        <img src={mobile} alt="mobile" />
      </h3>
      <div id="page">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
      </div>
    </>
  );
}