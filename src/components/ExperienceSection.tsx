import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ArrowUpRight } from "lucide-react";

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
  },
  {
    title: "Full Stack Developer Intern",
    company: "Spring Jauner",
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
          className="text-center mb-16"
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

        <div className="relative">
          {/* Timeline Line - Glowing */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:transform md:-translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary to-transparent blur-sm" />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-5 h-5 transform -translate-x-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-5 h-5 bg-primary rounded-full border-4 border-background shadow-glow animate-glow-pulse" />
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="glass-strong rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 group"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                          <Briefcase className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.title}</h3>
                          <p className="text-primary font-semibold flex items-center gap-1">
                            {exp.company}
                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </p>
                        </div>
                      </div>
                      <span className={`px-3 py-1.5 ${exp.bgColor} rounded-full text-xs font-semibold text-foreground`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0`} />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
