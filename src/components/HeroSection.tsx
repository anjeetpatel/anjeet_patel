
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
          // Add blinking cursor effect after typing completes
          setTimeout(() => {
            const cursor = document.querySelector('.cursor');
            if (cursor) cursor.classList.add('blinking');
          }, 500);
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" 
          style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-float"
          style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center relative z-10">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-lg mb-4 text-indigo-600 font-medium shimmer-effect inline-block px-4 py-1 rounded-full">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Anjeet Patel
            </h1>
            <div className="h-12 flex justify-center items-center">
              <p className="text-xl md:text-2xl mb-8 text-foreground inline-flex items-center">
                {typedText}
                <span className="cursor ml-1 inline-block w-[3px] h-6 bg-indigo-600"></span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="#projects"
                className="btn-primary px-8 py-3 rounded-full text-base group"
              >
                <span className="relative z-10">View My Work</span>
              </a>
              <a
                href="#contact"
                className="border-2 border-indigo-500 hover:border-indigo-600 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 inline-flex h-12 items-center justify-center rounded-full px-8 py-3 text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring glow-effect"
              >
                Contact Me
              </a>
            </div>
          </div>
          <a 
            href="#about" 
            className="absolute bottom-10 animate-bounce-subtle p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-indigo-100/50"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6 text-indigo-600" />
          </a>
        </div>
      </div>

      <style>
        {`
          .cursor {
            animation: blink-cursor 1s step-end infinite;
          }

          .cursor.blinking {
            animation: blink-cursor 1s step-end infinite;
          }

          @keyframes blink-cursor {
            from, to { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
