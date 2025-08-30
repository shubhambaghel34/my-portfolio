import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IslandParadiseHome from './components/Space3DHome';
import CV from './components/CV';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <IslandParadiseHome />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <CV />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
