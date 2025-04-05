
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="gradient-bg text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-bold mb-6">Anjeet Patel</h2>
          <p className="text-lg opacity-90 mb-8 text-center">Building tech that makes a difference</p>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/anjeetpatel" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:-translate-y-1"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/anjeet-patel/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:-translate-y-1"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:anjeetpatel0786@gmail.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:-translate-y-1"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-8">
          <div>
            <p className="text-sm opacity-75">© {currentYear} Anjeet Patel. All rights reserved</p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
