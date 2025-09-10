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
import ErrorBoundary from './components/ErrorBoundary';
import UnderConstruction from './components/UnderConstruction';

function App() {
  const isUnderConstruction = process.env.REACT_APP_UNDER_CONSTRUCTION === 'true';
  return (
    <div className="App">
      <Navbar />
      <ErrorBoundary>
        <main>
          {isUnderConstruction ? (
            <UnderConstruction />
          ) : (
            <>
              <IslandParadiseHome />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <CV />
              <Contact />
            </>
          )}
        </main>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
