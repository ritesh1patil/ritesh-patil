import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Calendar, MapPin, ArrowUpRight, Sparkles, Building2, Rocket, Star, Zap } from "lucide-react";

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
    buildingColor: "#4285F4",
    year: "2025",
    icon: Star,
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
    buildingColor: "#F59E0B",
    year: "2025",
    icon: Zap,
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
    buildingColor: "#10B981",
    year: "2025",
    icon: Rocket,
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
    buildingColor: "#F59E0B",
    year: "2024",
    icon: Building2,
  },
];

// Isometric Building Component
const IsometricBuilding = ({ 
  color, 
  index, 
  isActive, 
  onClick,
  icon: Icon 
}: { 
  color: string; 
  index: number; 
  isActive: boolean;
  onClick: () => void;
  icon: React.ElementType;
}) => {
  const heights = [80, 100, 70, 90];
  const height = heights[index % heights.length];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="cursor-pointer group relative"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Building Shadow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black/20 blur-md rounded-full"
        style={{ width: 60, height: 20 }}
        animate={{ 
          scale: isActive ? 1.2 : 1,
          opacity: isActive ? 0.4 : 0.2 
        }}
      />
      
      {/* Main Building Structure */}
      <motion.div
        className="relative"
        animate={{ 
          y: isActive ? -10 : 0,
          scale: isActive ? 1.1 : 1
        }}
        whileHover={{ y: -5, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Building Base - Isometric Face Left */}
        <div 
          className="absolute"
          style={{
            width: 50,
            height: height,
            background: `linear-gradient(135deg, ${color}dd, ${color}99)`,
            transform: "skewY(-30deg)",
            transformOrigin: "bottom left",
            left: 0,
            bottom: 20,
            borderRadius: "4px 4px 0 0",
            boxShadow: isActive ? `0 0 30px ${color}60` : "none",
          }}
        />
        
        {/* Building Base - Isometric Face Right */}
        <div 
          className="absolute"
          style={{
            width: 50,
            height: height,
            background: `linear-gradient(135deg, ${color}99, ${color}66)`,
            transform: "skewY(30deg)",
            transformOrigin: "bottom right",
            right: 0,
            bottom: 20,
            borderRadius: "4px 4px 0 0",
          }}
        />
        
        {/* Building Top - Isometric Roof */}
        <div 
          className="absolute"
          style={{
            width: 70,
            height: 40,
            background: `linear-gradient(to right, ${color}, ${color}cc)`,
            transform: "rotateX(60deg) rotateZ(45deg)",
            transformOrigin: "center",
            left: "50%",
            marginLeft: -35,
            bottom: height + 15,
            borderRadius: "4px",
          }}
        />
        
        {/* Windows Pattern */}
        <div className="absolute left-1 bottom-24 grid grid-cols-2 gap-1">
          {[...Array(Math.floor(height / 25))].map((_, i) => (
            <motion.div
              key={i}
              className="w-4 h-3 bg-white/40 rounded-sm"
              animate={{ 
                opacity: isActive ? [0.4, 0.8, 0.4] : 0.4 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
            />
          ))}
        </div>
        
        {/* Icon on top */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 p-2 rounded-full"
          style={{ 
            bottom: height + 45,
            background: color,
            boxShadow: `0 0 20px ${color}80`
          }}
          animate={{ 
            y: isActive ? [0, -5, 0] : 0 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Icon className="w-5 h-5 text-white" />
        </motion.div>
        
        {/* Glow effect when active */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              background: `radial-gradient(circle at center, ${color}40, transparent 70%)`,
              filter: "blur(10px)",
            }}
          />
        )}
      </motion.div>
      
      {/* Company Label */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold"
        style={{ bottom: -5 }}
        animate={{ opacity: isActive ? 1 : 0.7 }}
      >
        <span className="px-2 py-1 glass-strong rounded-full text-foreground">
          {experiences[index].year}
        </span>
      </motion.div>
    </motion.div>
  );
};

// Isometric Road Path
const IsometricRoad = () => {
  return (
    <svg 
      viewBox="0 0 1000 200" 
      className="absolute bottom-8 left-0 right-0 w-full h-32 md:h-40"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Road gradient */}
        <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--muted))" />
          <stop offset="50%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(var(--muted))" />
        </linearGradient>
        
        {/* Dashed line pattern */}
        <pattern id="dashPattern" patternUnits="userSpaceOnUse" width="40" height="10">
          <motion.rect 
            x="0" 
            y="4" 
            width="20" 
            height="2" 
            fill="hsl(var(--primary))"
            animate={{ x: [0, 40] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </pattern>
      </defs>
      
      {/* Main Road Surface */}
      <motion.path
        d="M 0,150 C 100,150 150,100 250,100 S 400,150 500,150 S 650,100 750,100 S 900,150 1000,150"
        fill="none"
        stroke="url(#roadGradient)"
        strokeWidth="50"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      
      {/* Road Center Line (animated dashes) */}
      <motion.path
        d="M 0,150 C 100,150 150,100 250,100 S 400,150 500,150 S 650,100 750,100 S 900,150 1000,150"
        fill="none"
        stroke="url(#dashPattern)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="15 10"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
      />
      
      {/* Glowing edge */}
      <motion.path
        d="M 0,150 C 100,150 150,100 250,100 S 400,150 500,150 S 650,100 750,100 S 900,150 1000,150"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        style={{ filter: "blur(4px)" }}
      />
    </svg>
  );
};

// Floating Particles Component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

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
      
      <FloatingParticles />
      
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
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-4">
            Building real-world experience through impactful internships at leading tech companies
          </p>
          <p className="text-sm text-primary font-medium">
            ✨ Click on buildings to explore each milestone
          </p>
        </motion.div>

        {/* Isometric Journey Visualization */}
        <div className="relative max-w-5xl mx-auto mb-16" style={{ perspective: "1000px" }}>
          {/* Buildings Container */}
          <div className="relative h-64 md:h-72 flex items-end justify-around px-4 md:px-12">
            {experiences.map((exp, index) => (
              <IsometricBuilding
                key={index}
                color={exp.buildingColor}
                index={index}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                icon={exp.icon}
              />
            ))}
          </div>
          
          {/* Isometric Road */}
          <IsometricRoad />
          
          {/* Journey Progress Indicator */}
          <motion.div
            className="absolute bottom-2 left-0 right-0 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            viewport={{ once: true }}
          >
            {experiences.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'w-6 bg-primary' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </div>

        {/* Selected Experience Detail Card */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="relative glass-strong rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-500 group overflow-hidden"
          >
            {/* Card Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${experiences[activeIndex].color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
            
            {/* Sparkle Effect */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 180 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-6 right-6"
            >
              <Sparkles className="w-6 h-6 text-primary/40" />
            </motion.div>

            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <motion.div 
                  className={`w-16 h-16 rounded-2xl ${experiences[activeIndex].iconBg} flex items-center justify-center shadow-lg`}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Briefcase className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{experiences[activeIndex].title}</h3>
                  <p className="text-primary font-semibold text-lg flex items-center gap-1">
                    {experiences[activeIndex].company}
                    <ArrowUpRight className="w-5 h-5" />
                  </p>
                </div>
              </div>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className={`px-5 py-2 ${experiences[activeIndex].bgColor} rounded-full text-sm font-bold text-foreground border border-current/10`}
              >
                {experiences[activeIndex].type}
              </motion.span>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl text-sm text-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-medium">{experiences[activeIndex].period}</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl text-sm text-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">{experiences[activeIndex].location}</span>
              </div>
            </div>

            {/* Description with Enhanced List */}
            <ul className="space-y-4">
              {experiences[activeIndex].description.map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 text-foreground/80"
                >
                  <span className={`w-3 h-3 bg-gradient-to-r ${experiences[activeIndex].color} rounded-full mt-1.5 flex-shrink-0 shadow-sm`} />
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Bottom Gradient Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${experiences[activeIndex].color} origin-left`}
            />
          </motion.div>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            onClick={() => setActiveIndex(prev => prev === 0 ? experiences.length - 1 : prev - 1)}
            className="px-6 py-3 glass-strong rounded-xl font-medium text-foreground hover:bg-primary/10 transition-all"
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Previous
          </motion.button>
          <motion.button
            onClick={() => setActiveIndex(prev => prev === experiences.length - 1 ? 0 : prev + 1)}
            className="px-6 py-3 glass-strong rounded-xl font-medium text-foreground hover:bg-primary/10 transition-all"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Next →
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
