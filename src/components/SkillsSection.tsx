import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layout, Database, Server, Wrench, Users, Zap, Bot } from "lucide-react";

const skillCategories = [
  {
    icon: Layout,
    title: "Frontend Development",
    skills: ["React.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "RESTful APIs", "EJS"],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Database,
    title: "Database & Tools",
    skills: ["SQL", "MongoDB", "Git", "Linux", "MobaXterm", "Visual Studio Code"],
    color: "from-primary to-amber-600",
    bgColor: "bg-primary/10",
  },
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["JavaScript", "Python", "TypeScript", "Java", "SQL"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Wrench,
    title: "Development Practices",
    skills: ["CRUD Operations", "API Integration", "Testing", "Deployment"],
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Team Collaboration", "Problem Solving", "Communication", "Leadership"],
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-500/10",
  },
  {
    icon: Bot,
    title: "AI Tools",
    skills: ["ChatGPT", "GitHub Copilot", "Claude", "Gemini"],
    color: "from-violet-500 to-fuchsia-500",
    bgColor: "bg-violet-500/10",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse-soft" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/20 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
      
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
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-foreground">SKILLS</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technical{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Expertise</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-accent rounded-full origin-left"
              />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
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
              whileHover={{ scale: 1.02, y: -8 }}
              className="group glass-strong rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
            >
              {/* Icon with animated background */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <category.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + i * 0.05 }}
                    className={`px-3 py-1.5 ${category.bgColor} text-foreground rounded-lg text-sm font-medium hover:scale-105 transition-transform cursor-default`}
                  >
                    {skill}
                  </motion.span>
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
