import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Building tech that makes a difference";
  
  useEffect(() => {
    setIsVisible(true);
    
    const typeText = () => {
      let i = 0;
      const typing = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typing);
        }
      }, 100);
      
      return () => clearInterval(typing);
    };
    
    // Start typing after a short delay
    const timer = setTimeout(typeText, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center relative z-10">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-lg mb-4 text-primary font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Anjeet Patel
            </h1>
            <div className="h-8">
              <p className="text-xl md:text-2xl mb-8 text-foreground">
                {typedText}<span className="animate-pulse">|</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="#projects"
                className="btn-primary px-8 py-3 rounded-full text-base"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-primary hover:bg-primary/10 inline-flex h-12 items-center justify-center rounded-full px-8 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contact Me
              </a>
            </div>
          </div>
          <a 
            href="#about" 
            className="absolute bottom-10 animate-bounce p-2 bg-white rounded-full shadow-md"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
