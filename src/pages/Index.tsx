import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

const Index = () => {
  // Initialize AOS-like scroll animations without the library
  useEffect(() => {
    const animateOnScroll = () => {
      const sections = document.querySelectorAll('.section');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('animate-fadeInUp');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
