
import { Code, Server, Palette, Database, GitBranch, UserCheck } from "lucide-react";
import { useState, useEffect } from "react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: ["C++", "JavaScript", "C", "Python"]
  },
  {
    title: "Frameworks",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: ["HTML", "CSS", "NodeJS", "React Js", "UI/UX"]
  },
  {
    title: "Tools & Platforms",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: ["MySQL", "MongoDB", "Firebase", "GitHub", "Figma"]
  },
  {
    title: "Soft Skills",
    icon: <UserCheck className="h-6 w-6 text-primary" />,
    skills: ["Leadership", "Problem-Solving", "Team player", "Communication", "Adaptability"]
  }
];

const SkillsSection = () => {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<number>(0);

  // Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Staggered animation for skill categories
          const timer = setTimeout(() => {
            setVisibleCategories(Array.from({ length: skillCategories.length }, (_, i) => i));
          }, 300);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="skills" className="py-24 section-padding section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold inline-block text-gradient mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's what I bring to the table
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="inline-flex bg-secondary rounded-full p-1">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-5 py-2 rounded-full transition-all ${
                  activeCategory === index
                    ? "bg-primary text-white shadow-md"
                    : "hover:bg-secondary-foreground/10"
                }`}
              >
                <div className="flex items-center space-x-2">
                  {category.icon}
                  <span>{category.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-3xl min-h-[300px]">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-primary/10 rounded-lg mr-4">
                {skillCategories[activeCategory].icon}
              </div>
              <h3 className="text-2xl font-bold">{skillCategories[activeCategory].title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-tag"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: visibleCategories.includes(activeCategory) ? 'fadeIn 0.5s ease-out forwards' : 'none'
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default SkillsSection;
