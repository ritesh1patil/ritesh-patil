import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Briefcase, GraduationCap, Sparkles, Code2, Zap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-hero relative overflow-hidden pt-20"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-soft" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[150px] opacity-50" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[15%] hidden lg:block"
      >
        <div className="glass rounded-2xl p-3 shadow-card">
          <Code2 className="w-6 h-6 text-primary" />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-48 right-[12%] hidden lg:block"
      >
        <div className="glass rounded-2xl p-3 shadow-card">
          <Zap className="w-6 h-6 text-accent-foreground" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-[8%] hidden lg:block"
      >
        <div className="glass rounded-2xl p-3 shadow-card">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium mb-8 shadow-soft"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-foreground">Open to Opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6"
            >
              Hello, I'm{" "}
              <span className="relative">
                <span className="text-gradient">Ritesh Patil</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-accent rounded-full origin-left"
                />
              </span>
              <br />
              <span className="text-muted-foreground">Software Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl"
            >
              Passionate Computer Engineering student building impactful web applications. 
              From <span className="text-foreground font-medium">Jio</span> to <span className="text-foreground font-medium">Google</span>, I transform ideas into elegant, user-centric solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#contact">
                <Button variant="hero" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Get in Touch
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </a>
              <a href="#experience">
                <Button variant="heroOutline" className="group">
                  <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                  View Experience
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <div className="glass rounded-2xl p-4 flex items-center gap-4 shadow-soft hover:shadow-card transition-shadow">
                <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center shadow-button">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">4+</p>
                  <p className="text-sm text-muted-foreground">Internships</p>
                </div>
              </div>
              <div className="glass rounded-2xl p-4 flex items-center gap-4 shadow-soft hover:shadow-card transition-shadow">
                <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center shadow-button">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">2026</p>
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
            <div className="relative max-w-lg mx-auto">
              {/* Animated Ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[105%] h-[105%] rounded-[3rem] border-2 border-dashed border-primary/20 animate-rotate-slow" />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-4 bg-primary/20 rounded-[3rem] blur-3xl animate-glow-pulse" />
              
              {/* Background Shapes */}
              <motion.div
                animate={{ rotate: [6, 8, 6] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-primary/20 rounded-[3rem] scale-[0.98]"
              />
              <motion.div
                animate={{ rotate: [-3, -5, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-primary/10 rounded-[3rem] scale-[0.96]"
              />
              
              {/* Image Container */}
              <div className="relative glass-strong rounded-[3rem] p-2 shadow-glow">
                <div className="relative overflow-hidden rounded-[2.5rem]">
                  <img
                    src={profilePhoto}
                    alt="Ritesh Patil - Software Developer"
                    className="w-full object-cover aspect-square"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Badge - Available */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -right-2 md:-right-6 top-1/4 glass-strong shadow-card rounded-2xl p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-foreground whitespace-nowrap">Available for Work</span>
                </div>
              </motion.div>

              {/* Floating Badge - Degree */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -left-2 md:-left-6 bottom-1/4 glass-strong shadow-card rounded-2xl p-4"
              >
                <p className="text-3xl font-bold text-gradient">B.E.</p>
                <p className="text-xs text-muted-foreground">Computer Engineering</p>
              </motion.div>

              {/* Tech Stack Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
                className="absolute left-1/2 -translate-x-1/2 -bottom-4 glass-strong shadow-card rounded-full px-6 py-3"
              >
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Sparkles className="w-4 h-4 text-primary" />
                  React • Node.js • TypeScript
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
