
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

  useEffect(() => {
    setVisibleCategories(Array.from({ length: skillCategories.length }, (_, i) => i));
  }, []);

  return (
    <section id="skills" className="py-20 section-padding section bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">My Skills</h2>
        <p className="text-muted-foreground text-center mb-12">Here's what I bring to the table</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-card rounded-lg p-6 shadow-md transition-all duration-700 transform ${
                visibleCategories.includes(categoryIndex)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${categoryIndex * 100}ms`
              }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 p-3 bg-primary/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
