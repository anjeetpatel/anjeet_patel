
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-lg mb-4 text-primary">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Anjeet Patel
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Building tech that makes a difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="btn-primary"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-primary hover:bg-primary/10 inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contact Me
              </a>
            </div>
          </div>
          <a 
            href="#about" 
            className="absolute bottom-10 animate-bounce p-2"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
