import { User, Code, Monitor, Database } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 section section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold inline-block text-gradient mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden aspect-square w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 opacity-10"></div>
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-primary/10 bg-white shadow-xl">
                <User className="h-1/3 w-1/3 text-primary/50" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">
              <span className="border-b-2 border-primary pb-1">Who I Am</span>
            </h3>
            <p className="text-lg mb-6 leading-relaxed">
              I am passionate about leveraging technology to solve real-world problems. 
              My academic journey has equipped me with a robust foundation in computer science principles, 
              while my hands-on experience has honed my skills in full-stack web development.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              With expertise in both frontend and backend technologies, I enjoy creating clean, 
              efficient solutions that deliver exceptional user experiences. I'm constantly 
              learning and exploring new technologies to stay at the forefront of web development.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm card-hover">
                <Code className="text-primary" />
                <span>Web Development</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm card-hover">
                <Monitor className="text-primary" />
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm card-hover">
                <Database className="text-primary" />
                <span>Database Design</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm card-hover">
                <User className="text-primary" />
                <span>Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
