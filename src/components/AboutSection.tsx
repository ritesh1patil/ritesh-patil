import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, MapPin, GraduationCap, Target, Sparkles } from "lucide-react";

const highlights = [
  "Jio Platforms Experience (Data Science & Software Development)",
  "Google Student Ambassador 2025",
  "Full Stack Development Expertise",
  "Mumbai University B.E. Computer Engineering",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/30 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-foreground">ABOUT ME</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Building Solutions, Not Just{" "}
              <span className="relative">
                <span className="text-gradient">Code</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-accent rounded-full origin-left"
                />
              </span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              I'm a driven Computer Engineering student at Chhatrapati Shivaji Maharaj Institute of Technology, 
              passionate about creating impactful digital experiences. With hands-on experience at industry leaders 
              like Jio Platforms Limited and recognition as a Google Student Ambassador, I bring a unique blend of 
              technical expertise and leadership skills.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              My journey in tech is fueled by curiosity and a relentless drive to solve real-world problems. 
              Whether it's developing responsive web interfaces, building full-stack applications, or exploring 
              data science solutions, I approach each challenge with dedication and a commitment to excellence.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 glass rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            {/* Education Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass-strong rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-button">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Education</h3>
                  <p className="text-foreground font-bold text-xl">B.E. Computer Engineering</p>
                  <p className="text-muted-foreground">Mumbai University</p>
                  <p className="text-muted-foreground">CSMIT • Expected 2026</p>
                </div>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass-strong rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-foreground font-bold text-xl">Navi Mumbai, India</p>
                  <p className="text-muted-foreground">Open to Remote & On-site</p>
                </div>
              </div>
            </motion.div>

            {/* Goal Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative overflow-hidden rounded-2xl p-6 shadow-glow"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-accent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/20 to-primary/0 animate-pulse-soft" />
              
              <div className="relative flex items-start gap-4">
                <div className="w-16 h-16 bg-primary-foreground/20 backdrop-blur rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">Career Goal</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    To become a software developer at top global technology companies, 
                    contributing to innovative solutions that make a difference.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
