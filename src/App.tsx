/*import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SectionWave } from './components/SectionWave';

function HomePage() {
  return (
    <>
      <Hero />
      <SectionWave variant="deep" fill="rgba(255,255,255,0.12)" />
      <About />
      <SectionWave variant="smooth" flip fill="rgba(255,255,255,0.08)" />
      <Skills />
      <SectionWave variant="deep" fill="rgba(255,255,255,0.1)" />
      <Projects />
      <SectionWave variant="smooth" flip fill="rgba(255,255,255,0.07)" />
      <Experience />
      <SectionWave variant="deep" fill="rgba(255,255,255,0.09)" />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
*/

import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Certifications } from './components/Certifications';
import { CriticalHit } from './components/CriticalHit';


function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <CriticalHit />
      </main>
    </>
  );
}

export default App;
