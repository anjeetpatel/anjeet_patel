
import { Code, Server, Palette, Database, GitBranch, UserCheck } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["C++", "JavaScript", "C", "Python"],
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Frameworks",
    icon: <Server className="h-6 w-6" />,
    skills: ["HTML", "CSS", "NodeJS", "React Js", "UI/UX"],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Tools & Platforms",
    icon: <Database className="h-6 w-6" />,
    skills: ["MySQL", "MongoDB", "Firebase", "GitHub", "Figma"],
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Soft Skills",
    icon: <UserCheck className="h-6 w-6" />,
    skills: ["Leadership", "Problem-Solving", "Team player", "Communication", "Adaptability"],
    color: "from-pink-500 to-pink-600"
  }
];

const SkillsSection = () => {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <section id="skills" className="py-24 section-padding section bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      <div className="container mx-auto" ref={containerRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Skills
          </h2>
          <div className="h-1 w-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's what I bring to the table
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(null)}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                    : `hover:bg-white ${isHovering === index ? 'text-indigo-600' : 'text-foreground'}`
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className={activeCategory === index ? 'text-white' : `text-gradient-${index}`}>
                    {category.icon}
                  </span>
                  <span>{category.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-3xl min-h-[350px] transition-all duration-500 ease-in-out transform hover:shadow-2xl border border-indigo-50">
            <div className="flex items-center mb-8">
              <div className={`p-4 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-xl mr-4 shadow-md`}>
                <div className="text-white">
                  {skillCategories[activeCategory].icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold">{skillCategories[activeCategory].title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-tag group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: visibleCategories.includes(activeCategory) ? 'fadeIn 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <span className="relative z-10">{skill}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-100/0 to-indigo-100/0 group-hover:from-blue-100 group-hover:to-indigo-100 rounded-full -z-10 transition-all duration-300"></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }

            .text-gradient-0 { @apply text-blue-500; }
            .text-gradient-1 { @apply text-indigo-500; }
            .text-gradient-2 { @apply text-purple-500; }
            .text-gradient-3 { @apply text-pink-500; }
          `}
        </style>
      </div>
    </section>
  );
};

export default SkillsSection;
