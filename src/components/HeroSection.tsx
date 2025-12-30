import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Briefcase, GraduationCap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-hero relative overflow-hidden pt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-pulse-soft" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent-foreground rounded-full animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6"
            >
              👋 Open to Opportunities
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Hello, I'm{" "}
              <span className="text-gradient">Ritesh Patil</span>
              <br />
              Software Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
            >
              Passionate Computer Engineering student building impactful web applications. 
              From Jio to Google, I transform ideas into elegant, user-centric solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#contact">
                <Button variant="hero">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="#experience">
                <Button variant="heroOutline">
                  <Play className="w-5 h-5 mr-2" />
                  View Experience
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">4+</p>
                  <p className="text-sm text-muted-foreground">Internships</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2026</p>
                  <p className="text-sm text-muted-foreground">Graduating</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-primary/20 rounded-[3rem] transform rotate-6 scale-95" />
              <div className="absolute inset-0 bg-primary/10 rounded-[3rem] transform -rotate-3 scale-95" />
              
              {/* Image Container */}
              <div className="relative bg-gradient-accent rounded-[3rem] p-2 shadow-glow">
                <img
                  src={profilePhoto}
                  alt="Ritesh Patil - Software Developer"
                  className="w-full max-w-md mx-auto rounded-[2.5rem] object-cover aspect-square"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-1/4 bg-card shadow-card rounded-2xl p-4"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Available for Work</span>
                </div>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -left-4 bottom-1/4 bg-card shadow-card rounded-2xl p-4 border border-border"
              >
                <p className="text-3xl font-bold text-gradient">B.E.</p>
                <p className="text-xs text-muted-foreground">Computer Engineering</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
