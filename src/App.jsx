import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import NavBar from './components/NavBar'
import HeroSection from './components/Sections/HeroSection'
import SkillsSection from './components/Sections/SkillsSection'
import ProjectsSection from './components/Sections/ProjectsSection'
import AboutSection from './components/Sections/AboutSection'
import ContactSection from './components/Sections/ContactSection'
import Footer from './components/Sections/Footer'
import GlitchBackdrop from './components/Background/GlitchBackdrop'
import AsciiBackdrop from './components/Background/AsciiBackdrop'

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <NavBar />
        <HeroSection />
        <GlitchBackdrop>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
        </GlitchBackdrop>
        <AsciiBackdrop>
          <ContactSection />
          <Footer />
        </AsciiBackdrop>
      </div>
    </ThemeProvider>
  )
}

export default App