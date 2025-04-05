import { Download, FileText } from "lucide-react";
import { useState } from "react";

const ResumeSection = () => {
  // Replace this URL with your actual resume link
  const resumeUrl = "https://drive.google.com/file/your-file-id/view";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="resume" className="py-24 section-padding section bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold inline-block text-gradient mb-4">Resume</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download my resume to learn more about my experience and qualifications
          </p>
        </div>

        <div className="flex justify-center">
          <div 
            className="max-w-md w-full bg-white rounded-2xl p-12 shadow-xl transform transition-all duration-500 card-hover"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex justify-center mb-8">
              <div className={`p-6 rounded-full bg-primary/10 transition-all duration-500 ${isHovered ? 'scale-110 bg-primary/20' : ''}`}>
                <FileText className={`h-16 w-16 text-primary transition-all duration-500 ${isHovered ? 'rotate-12' : ''}`} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">My Resume</h3>
            <p className="text-center text-muted-foreground mb-8">
              View or download my resume to see my complete work history, education, and skills.
            </p>
            <div className="flex justify-center">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-full inline-flex items-center px-8 py-3 text-base"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
