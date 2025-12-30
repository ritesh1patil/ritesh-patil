import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, MapPin, GraduationCap, Target } from "lucide-react";

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
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
              ABOUT ME
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building Solutions, Not Just <span className="text-gradient">Code</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a driven Computer Engineering student at Chhatrapati Shivaji Maharaj Institute of Technology, 
              passionate about creating impactful digital experiences. With hands-on experience at industry leaders 
              like Jio Platforms Limited and recognition as a Google Student Ambassador, I bring a unique blend of 
              technical expertise and leadership skills.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
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
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
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
            <div className="bg-background rounded-2xl p-6 shadow-soft border border-border">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Education</h3>
                  <p className="text-foreground font-medium">B.E. Computer Engineering</p>
                  <p className="text-sm text-muted-foreground">Mumbai University</p>
                  <p className="text-sm text-muted-foreground">CSMIT • Expected 2026</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-background rounded-2xl p-6 shadow-soft border border-border">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-foreground font-medium">Navi Mumbai, India</p>
                  <p className="text-sm text-muted-foreground">Open to Remote & On-site</p>
                </div>
              </div>
            </div>

            {/* Goal Card */}
            <div className="bg-gradient-accent rounded-2xl p-6 shadow-glow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-card/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">Career Goal</h3>
                  <p className="text-primary-foreground/90">
                    To become a software developer at top global technology companies, 
                    contributing to innovative solutions that make a difference.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
