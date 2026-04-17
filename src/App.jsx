import React from 'react';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Fixed 3D Component */}
      <Background3D />
      
      {/* UI Overlay */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Footer />
      </div>
    </>
  );
}

export default App;
