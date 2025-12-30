import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layout, Database, Server, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Layout,
    title: "Frontend Development",
    skills: ["React.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "RESTful APIs", "EJS"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Database & Tools",
    skills: ["SQL", "MongoDB", "Git", "Linux", "MobaXterm"],
    color: "from-primary to-amber-600",
  },
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["JavaScript", "Python", "TypeScript", "SQL"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Wrench,
    title: "Development Practices",
    skills: ["CRUD Operations", "API Integration", "Testing", "Deployment"],
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Team Collaboration", "Problem Solving", "Communication", "Leadership"],
    color: "from-teal-500 to-cyan-500",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
            SKILLS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background rounded-2xl p-6 shadow-soft border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-accent text-accent-foreground rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
