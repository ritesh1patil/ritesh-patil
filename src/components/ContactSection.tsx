import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github, MapPin, Send, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
            CONTACT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open to internship, full-time, remote, and on-site opportunities. 
            Let's discuss how I can contribute to your team.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-accent rounded-3xl p-8 md:p-12 shadow-glow text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              I'm actively seeking opportunities to apply my skills in web development, 
              full-stack engineering, and software development. Let's create impact together.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="https://www.linkedin.com/in/ritesh-patil-3408a52a6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="heroOutline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href="mailto:contact@riteshpatil.dev">
                <Button variant="heroOutline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
              </a>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm">
                <MapPin className="w-6 h-6 text-primary-foreground mx-auto mb-2" />
                <p className="text-primary-foreground font-medium">Navi Mumbai, India</p>
                <p className="text-primary-foreground/70 text-sm">Open to Relocation</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm">
                <Send className="w-6 h-6 text-primary-foreground mx-auto mb-2" />
                <p className="text-primary-foreground font-medium">Available Now</p>
                <p className="text-primary-foreground/70 text-sm">Internship & Full-time</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm">
                <Github className="w-6 h-6 text-primary-foreground mx-auto mb-2" />
                <p className="text-primary-foreground font-medium">Open Source</p>
                <p className="text-primary-foreground/70 text-sm">Check My Projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
