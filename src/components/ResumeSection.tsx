
import { Download, FileText } from "lucide-react";

const ResumeSection = () => {
  // Replace this URL with your actual resume link
  const resumeUrl = "https://drive.google.com/file/your-file-id/view";

  return (
    <section id="resume" className="py-20 section-padding section">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Resume</h2>
        <p className="text-muted-foreground text-center mb-12">
          Download my resume to learn more about my experience and qualifications
        </p>

        <div className="max-w-md mx-auto bg-card rounded-lg p-8 shadow-md text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10">
              <FileText className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-4">My Resume</h3>
          <p className="text-muted-foreground mb-6">
            View or download my resume to see my complete work history, education, and skills.
          </p>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
