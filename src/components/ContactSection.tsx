
import { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({
    status: "idle",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ status: "submitting", message: "Submitting..." });
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      setFormStatus({
        status: "success",
        message: "Thank you! Your message has been sent successfully."
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 section-padding section bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Contact Me</h2>
        <p className="text-muted-foreground text-center mb-12">
          Feel free to get in touch with me
        </p>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-muted-foreground mb-8">
              Whether you have a question, a project idea, or just want to say hello, 
              feel free to reach out. I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <a
                href="mailto:anjeetpatel0786@gmail.com"
                className="flex items-center group"
              >
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    anjeetpatel0786@gmail.com
                  </p>
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/anjeet-patel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    linkedin.com/in/anjeet-patel
                  </p>
                </div>
              </a>
              
              <a
                href="https://github.com/anjeetpatel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    github.com/anjeetpatel
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="md:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={formStatus.status === "submitting"}
                >
                  {formStatus.status === "submitting" ? "Sending..." : "Send Message"}
                </button>
                {formStatus.message && (
                  <p
                    className={`text-center ${
                      formStatus.status === "success"
                        ? "text-green-600"
                        : formStatus.status === "error"
                        ? "text-red-600"
                        : "text-muted-foreground"
                    }`}
                  >
                    {formStatus.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
