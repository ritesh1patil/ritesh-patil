import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github, MapPin, Send, ExternalLink, Sparkles } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[150px] animate-pulse-soft" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-foreground">CONTACT</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Connect</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-accent rounded-full origin-left"
              />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Open to internship, full-time, remote, and on-site opportunities. 
            Let's discuss how I can contribute to your team.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-accent" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/30 to-primary/0 animate-pulse-soft" />
            
            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-8 w-20 h-20 bg-primary-foreground/10 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 right-8 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl"
            />

            <div className="relative p-8 md:p-12 text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4"
              >
                Ready to Build Something Amazing?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-primary-foreground/90 mb-10 max-w-xl mx-auto text-lg"
              >
                I'm actively seeking opportunities to apply my skills in web development, 
                full-stack engineering, and software development. Let's create impact together.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                <a
                  href="https://www.linkedin.com/in/ritesh-patil-3408a52a6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="heroOutline" 
                    className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm group"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </a>
                <a href="mailto:contact@riteshpatil.dev">
                  <Button 
                    variant="heroOutline" 
                    className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm group"
                  >
                    <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Send Email
                  </Button>
                </a>
              </motion.div>

              {/* Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="grid md:grid-cols-3 gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-primary-foreground/10 rounded-2xl p-5 backdrop-blur-sm border border-primary-foreground/10 hover:border-primary-foreground/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-primary-foreground font-semibold">Navi Mumbai, India</p>
                  <p className="text-primary-foreground/70 text-sm">Open to Relocation</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-primary-foreground/10 rounded-2xl p-5 backdrop-blur-sm border border-primary-foreground/10 hover:border-primary-foreground/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Send className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-primary-foreground font-semibold">Available Now</p>
                  <p className="text-primary-foreground/70 text-sm">Internship & Full-time</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-primary-foreground/10 rounded-2xl p-5 backdrop-blur-sm border border-primary-foreground/10 hover:border-primary-foreground/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Github className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-primary-foreground font-semibold">Open Source</p>
                  <p className="text-primary-foreground/70 text-sm">Check My Projects</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
