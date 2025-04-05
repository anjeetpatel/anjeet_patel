
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  liveLink: string;
  tags: string[];
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Sahu Garments",
    description: "E-Commerce Website built with React, CSS, JSX, and MongoDB. A fully responsive online shopping platform with user authentication and product management.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    github: "https://github.com/anjeetpatel/SahuGarments",
    liveLink: "https://sahugarments.netlify.app/",
    tags: ["React", "CSS", "JSX", "MongoDB"],
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    title: "ScribblersHub",
    description: "Blogging Website developed using HTML, CSS, JS, EJS, and NodeJS. A platform where users can create, share, and interact with blog content.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    github: "https://github.com/anjeetpatel/scribblershub/tree/master",
    liveLink: "https://scribblershub.onrender.com/",
    tags: ["HTML", "CSS", "JS", "EJS", "NodeJS"],
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills. Built with React and Tailwind CSS for a responsive, modern UI/UX.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    github: "#",
    liveLink: "#",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    gradient: "from-purple-500 to-pink-500"
  }
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setVisibleProjects((prev) => 
                prev.includes(index) ? prev : [...prev, index]
              );
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="projects" className="py-24 section-padding section bg-gradient-to-br from-white via-indigo-50 to-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          My Projects
        </h2>
        <div className="h-1 w-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
        <p className="text-muted-foreground text-center mb-16">
          Here are some of my recent projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-700 transform ${
                visibleProjects.includes(index)
                  ? "translate-y-0 opacity-100 rotate-0"
                  : `translate-y-16 opacity-0 ${index % 2 === 0 ? "-rotate-3" : "rotate-3"}`
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                boxShadow: hoveredProject === index ? 
                  `0 20px 25px -5px rgba(${index === 0 ? '37, 99, 235' : index === 1 ? '79, 70, 229' : '168, 85, 247'}, 0.2)` : 
                  'none'
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 z-10`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-lg font-medium bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                    View Details
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-700"
                      style={{
                        animationDelay: `${tagIndex * 100 + 300}ms`,
                        animation: visibleProjects.includes(index) ? 'fadeIn 0.5s ease-out forwards' : 'none'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-300 group"
                  >
                    <Github className="h-4 w-4 mr-1.5 group-hover:scale-110 transition-transform duration-300" />
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-300 group"
                  >
                    <span>Live Demo</span>
                    <ArrowRight className="h-4 w-4 ml-1.5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
