import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ArrowUpRight, Sparkles } from "lucide-react";

const experiences = [
  {
    title: "Google Student Ambassador",
    company: "Google",
    location: "India",
    period: "08/2025 – 12/2025",
    type: "Ambassador",
    description: [
      "Promoted Google programs and initiatives among students on campus",
      "Helped organize workshops, events, and tech awareness sessions",
      "Engaged with students and represented Google in campus activities",
    ],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    year: "2025",
  },
  {
    title: "Data Science Intern",
    company: "Jio Platforms Limited",
    location: "Navi Mumbai",
    period: "05/2025 – 08/2025",
    type: "Internship",
    description: [
      "Built frontend components using React.js, HTML, CSS, and JavaScript, integrated with backend APIs",
      "Designed and implemented backend logic and database operations for data-driven solutions",
      "Gained exposure to Linux/MobaXterm, troubleshooting, testing, and deployment",
    ],
    color: "from-primary to-amber-600",
    bgColor: "bg-primary/10",
    iconBg: "bg-gradient-to-br from-primary to-amber-600",
    year: "2025",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Spring Jaunter",
    location: "Navi Mumbai",
    period: "01/2025 – 03/2025",
    type: "Internship",
    description: [
      "Developed full-stack web applications using Node.js, Express.js, and EJS",
      "Implemented CRUD operations, backend routing, and RESTful APIs",
      "Improved scalable backend functionality and collaborated in a real-time team environment",
    ],
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-500/10",
    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    year: "2025",
  },
  {
    title: "Software Developer Intern",
    company: "Jio Platforms Limited",
    location: "Navi Mumbai",
    period: "06/2024 – 08/2024",
    type: "Internship",
    description: [
      "Developed responsive web interfaces using React.js, improving UI/UX performance",
      "Integrated APIs for seamless data flow and application functionality",
      "Strengthened frontend optimization and JavaScript problem-solving skills",
    ],
    color: "from-primary to-amber-600",
    bgColor: "bg-primary/10",
    iconBg: "bg-gradient-to-br from-primary to-amber-600",
    year: "2024",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/20 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium mb-8"
          >
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-foreground">EXPERIENCE</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Journey</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-accent rounded-full origin-left"
              />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Building real-world experience through impactful internships at leading tech companies
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Timeline Line with Gradient */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:transform md:-translate-x-1/2">
            <motion.div 
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 bg-gradient-to-b from-primary via-accent to-primary/30 origin-top rounded-full"
            />
            <motion.div 
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              className="absolute inset-0 bg-gradient-to-b from-primary via-accent to-primary/30 blur-md origin-top opacity-60"
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Enhanced Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-16 h-16 transform -translate-x-1/2 md:-translate-x-1/2 z-10 -translate-y-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    className="relative w-full h-full"
                  >
                    {/* Outer Glow Ring */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} opacity-30 animate-ping`} style={{ animationDuration: "3s" }} />
                    
                    {/* Main Node */}
                    <div className={`relative w-full h-full rounded-full ${exp.iconBg} flex items-center justify-center shadow-lg border-4 border-background`}>
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Year Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className={`absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 glass-strong rounded-full text-xs font-bold text-foreground whitespace-nowrap`}
                    >
                      {exp.year}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Connecting Line from Node to Card */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                  className={`hidden md:block absolute top-6 w-8 h-0.5 bg-gradient-to-r ${exp.color} ${
                    index % 2 === 0 
                      ? "left-[calc(50%+2rem)] origin-left" 
                      : "right-[calc(50%+2rem)] origin-right"
                  }`}
                />

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-4rem)] ${index % 2 === 0 ? "md:pr-4" : "md:pl-4"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="relative glass-strong rounded-3xl p-6 shadow-soft hover:shadow-card transition-all duration-500 group overflow-hidden"
                  >
                    {/* Card Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Sparkle Effect */}
                    <motion.div
                      initial={{ opacity: 0, rotate: 0 }}
                      whileHover={{ opacity: 1, rotate: 180 }}
                      className="absolute top-4 right-4"
                    >
                      <Sparkles className="w-5 h-5 text-primary/40" />
                    </motion.div>

                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl ${exp.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <Briefcase className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                          <p className="text-primary font-semibold flex items-center gap-1">
                            {exp.company}
                            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                          </p>
                        </div>
                      </div>
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className={`px-4 py-1.5 ${exp.bgColor} rounded-full text-xs font-bold text-foreground border border-current/10`}
                      >
                        {exp.type}
                      </motion.span>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <div className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description with Enhanced List */}
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + 0.5 + i * 0.1 }}
                          className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors"
                        >
                          <span className={`w-2.5 h-2.5 bg-gradient-to-r ${exp.color} rounded-full mt-1.5 flex-shrink-0 shadow-sm`} />
                          <span className="leading-relaxed text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Bottom Gradient Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} origin-left`}
                    />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-4rem)]" />
              </motion.div>
            ))}
          </div>

          {/* Journey End Marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
            className="absolute left-8 md:left-1/2 -bottom-8 transform -translate-x-1/2"
          >
            <div className="relative">
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background shadow-glow" />
              <div className="absolute inset-0 w-6 h-6 bg-primary/50 rounded-full animate-ping" style={{ animationDuration: "2s" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
