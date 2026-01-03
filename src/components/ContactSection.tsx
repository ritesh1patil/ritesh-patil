import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, MapPin, Send, Sparkles } from "lucide-react";
import ContactForm from "./ContactForm";

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

        <div className="max-w-5xl mx-auto">
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

            <div className="relative p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                {/* Left side - Form */}
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2"
                  >
                    Send Me a Message
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.35 }}
                    className="text-primary-foreground/80 mb-6"
                  >
                    Fill out the form and I'll get back to you soon.
                  </motion.p>
                  <ContactForm />
                </div>

                {/* Right side - Info Cards */}
                <div className="space-y-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 lg:text-center"
                  >
                    Quick Info
                  </motion.h3>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="space-y-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="bg-primary-foreground/10 rounded-2xl p-5 backdrop-blur-sm border border-primary-foreground/10 hover:border-primary-foreground/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center shrink-0">
                          <MapPin className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-primary-foreground font-semibold">Navi Mumbai, India</p>
                          <p className="text-primary-foreground/70 text-sm">Open to Relocation</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="bg-primary-foreground/10 rounded-2xl p-5 backdrop-blur-sm border border-primary-foreground/10 hover:border-primary-foreground/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center shrink-0">
                          <Send className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-primary-foreground font-semibold">Available Now</p>
                          <p className="text-primary-foreground/70 text-sm">Internship & Full-time</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="bg-primary-foreground/10 rounded-2xl p-5 backdrop-blur-sm border border-primary-foreground/10 hover:border-primary-foreground/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center shrink-0">
                          <Github className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-primary-foreground font-semibold">Open Source</p>
                          <p className="text-primary-foreground/70 text-sm">Check My Projects</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
