
import { Github, ExternalLink } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  liveLink: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Sahu Garments",
    description: "E-Commerce Website built with React, CSS, JSX, and MongoDB. A fully responsive online shopping platform with user authentication and product management.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    github: "https://github.com/anjeetpatel/SahuGarments",
    liveLink: "https://sahugarments.netlify.app/",
    tags: ["React", "CSS", "JSX", "MongoDB"]
  },
  {
    title: "ScribblersHub",
    description: "Blogging Website developed using HTML, CSS, JS, EJS, and NodeJS. A platform where users can create, share, and interact with blog content.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    github: "https://github.com/anjeetpatel/scribblershub/tree/master",
    liveLink: "https://scribblershub.onrender.com/",
    tags: ["HTML", "CSS", "JS", "EJS", "NodeJS"]
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills. Built with React and Tailwind CSS for a responsive, modern UI/UX.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    github: "#",
    liveLink: "#",
    tags: ["React", "Tailwind CSS", "TypeScript"]
  }
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
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
    <section id="projects" className="py-20 section-padding section">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">My Projects</h2>
        <p className="text-muted-foreground text-center mb-12">
          Here are some of my recent projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`bg-card rounded-lg overflow-hidden shadow-md transition-all duration-500 transform ${
                visibleProjects.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
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
