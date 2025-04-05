
import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-padding section bg-secondary/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden aspect-square w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center rounded-lg border-2 border-primary/20">
                <User className="h-1/3 w-1/3 text-primary/30" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 inline-flex items-center">
              <span className="mr-2">About Me</span>
              <div className="h-1 w-10 bg-primary"></div>
            </h2>
            <p className="text-lg mb-6 text-muted-foreground">
              I am passionate about leveraging technology to solve real-world problems. 
              My academic journey has equipped me with a robust foundation in computer science principles, 
              while my hands-on experience has honed my skills in full-stack web development.
            </p>
            <p className="text-lg text-muted-foreground">
              With expertise in both frontend and backend technologies, I enjoy creating clean, 
              efficient solutions that deliver exceptional user experiences. I'm constantly 
              learning and exploring new technologies to stay at the forefront of web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
