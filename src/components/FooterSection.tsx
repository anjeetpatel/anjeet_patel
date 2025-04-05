
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  const [isHovering, setIsHovering] = useState<number | null>(null);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/anjeetpatel",
      label: "GitHub",
      hoverColor: "from-gray-600 to-gray-800"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/anjeet-patel/",
      label: "LinkedIn",
      hoverColor: "from-blue-500 to-blue-700"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:anjeetpatel0786@gmail.com",
      label: "Email",
      hoverColor: "from-red-500 to-red-700"
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-10 relative">
          {/* Animated background shape */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-spin-slow"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-spin-slow" 
              style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">Anjeet Patel</h2>
          <div className="h-1 w-20 bg-white/30 mb-6 rounded-full"></div>
          <p className="text-lg opacity-90 mb-8 text-center max-w-md">Building tech that makes a difference</p>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden`}
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(null)}
              >
                {isHovering === index && (
                  <span className={`absolute inset-0 bg-gradient-to-r ${link.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
                )}
                <span className="relative z-10">{link.icon}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-10 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-mb-8 pointer-events-none whitespace-nowrap">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-8">
          <div>
            <p className="text-sm opacity-75">© {currentYear} Anjeet Patel. All rights reserved</p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            aria-label="Scroll to top"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <ArrowUp className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
