
import { ArrowUp } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-lg font-medium">Anjeet Patel</p>
            <p className="text-sm opacity-75">Building tech that makes a difference</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-sm opacity-75">© {currentYear} All rights reserved</p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
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
