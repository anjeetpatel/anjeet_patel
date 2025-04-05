import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Update active section based on scroll position and handle navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);
      
      const sections = document.querySelectorAll("section[id]");
      
      // Find the section currently in view
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute("id") as string;
        
        if (sectionTop <= 100 && sectionTop >= -section.getBoundingClientRect().height + 100) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      } ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold">
          <span className="text-gradient">Anjeet</span>
          <span className="text-foreground">Patel</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${
                activeSection === item.href.substring(1) ? "active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden flex items-center p-2 bg-white rounded-full shadow-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link text-lg ${
                  activeSection === item.href.substring(1) ? "active" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  animation: 'fadeInRight 0.3s ease-out forwards',
                  opacity: 0
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
