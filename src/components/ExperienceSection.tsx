import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

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
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
            EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building real-world experience through impactful internships at leading tech companies
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2" />

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
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 md:-translate-x-1/2 border-4 border-background shadow-glow z-10" />

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-glow transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                          <Briefcase className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
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
