import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import ScrollSection from './components/ScrollSection';

function App() {
  return (
    <div className="app-background">
      <AnimatedBackground
        waveSpeed={16}
        parallaxStrength={0.015}
        nodesBase={4}
        nodesVariance={3}
        nodeBaseRadius={2.0}
        nodePulseAmp={0.5}
        nodePulseSpeed={0.8}
        edgeMaxActiveDistance={60}
        edgeOpacity={0.10}
        edgeActiveOpacity={0.28}
      />
      <Header />
      <Hero />
      <ScrollSection id="about">
        <About />
      </ScrollSection>
      <ScrollSection id="projects">
        <Projects />
      </ScrollSection>
      <ScrollSection id="experience">
        <Experience />
      </ScrollSection>
      <ScrollSection id="contact">
        <Contact />
      </ScrollSection>
    </div>
  );
}

export default App;