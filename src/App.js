import './App.css';

import Navbar from './components/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Works from './components/Works/Works.jsx';
import Contact from './components/Contact/Contact.jsx';


export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}