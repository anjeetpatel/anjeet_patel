
import { useState, useEffect } from "react";

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

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
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
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold">
          Anjeet<span className="text-primary">Patel</span>
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
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${
                  activeSection === item.href.substring(1) ? "active" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
