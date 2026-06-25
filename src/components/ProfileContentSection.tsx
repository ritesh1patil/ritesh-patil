import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Copy, Check, Linkedin, FileText, User, Target, Sparkles } from "lucide-react";

const linkedInHeadlines = [
  "Software Developer | React.js & Node.js | Jio & Google Experience | Building Scalable Web Solutions",
  "Full Stack Developer | B.E. Computer Engineering (2026) | Former Jio Intern | Open to Opportunities",
  "Frontend Developer | React.js Specialist | Google Student Ambassador | Passionate Problem Solver",
  "Web Developer | B.E. Computer Engineering | Jio Platforms Alum | Turning Ideas into Code",
  "Software Engineer | Full Stack | Data Science Enthusiast | Ready to Build the Future of Tech",
];

const linkedInAbout = `I'm a driven Computer Engineering graduate from Mumbai University with a proven track record of delivering impactful software solutions. My journey spans from developing responsive React.js interfaces at Jio Platforms Limited to representing Google as a Student Ambassador on campus.

What sets me apart:
• Hands-on experience building production-ready web applications using React.js, Node.js, and modern JavaScript frameworks
• Proven ability to collaborate in cross-functional teams and deliver under real-world constraints
• Strong foundation in both frontend development and backend API integration
• Passionate about writing clean, maintainable code that solves real problems

Graduated with my B.E. in Computer Engineering (2026), I'm actively seeking opportunities where I can contribute my technical skills while continuing to grow as a developer. Whether it's crafting pixel-perfect UIs, optimizing application performance, or building scalable backend solutions—I'm ready for the challenge.

Let's connect and explore how I can add value to your team.`;

const resumeSummary = `Results-driven Software Developer with hands-on experience at Jio Platforms Limited and recognition as a Google Student Ambassador. Proficient in React.js, Node.js, JavaScript, and full-stack development with a strong foundation in building responsive, user-centric web applications. Demonstrated ability to integrate APIs, implement database operations, and deliver scalable solutions in collaborative team environments. Graduated with B.E. in Computer Engineering from Mumbai University (2026). Eager to leverage technical expertise and problem-solving skills to contribute to innovative technology solutions at leading organizations.`;

const careerObjective = `To secure a challenging position as a Software Developer at a top global technology company where I can apply my skills in web development, full-stack engineering, and problem-solving while contributing to innovative projects that create meaningful impact. Seeking opportunities to grow professionally, collaborate with talented teams, and continuously enhance my technical expertise in a dynamic environment.`;

type ContentType = "headlines" | "about" | "summary" | "objective";

const ProfileContentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<ContentType>("headlines");

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const tabs = [
    { id: "headlines" as ContentType, label: "LinkedIn Headlines", icon: Linkedin },
    { id: "about" as ContentType, label: "LinkedIn About", icon: User },
    { id: "summary" as ContentType, label: "Resume Summary", icon: FileText },
    { id: "objective" as ContentType, label: "Career Objective", icon: Target },
  ];

  return (
    <section id="profile-content" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-foreground">PROFESSIONAL PROFILE</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready-to-Use{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Content</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-accent rounded-full origin-left"
              />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Professionally crafted content for LinkedIn, resume, and portfolio use
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-accent text-primary-foreground shadow-button"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          {activeTab === "headlines" && (
            <div className="space-y-4">
              {linkedInHeadlines.map((headline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.01, x: 4 }}
                  className="glass-strong rounded-2xl p-5 shadow-soft hover:shadow-card flex items-start justify-between gap-4 group transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center text-primary-foreground font-bold shadow-button">
                      {index + 1}
                    </span>
                    <p className="text-foreground font-medium leading-relaxed pt-1">{headline}</p>
                  </div>
                  <motion.button
                    onClick={() => copyToClipboard(headline, `headline-${index}`)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex-shrink-0 p-3 rounded-xl glass hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    title="Copy to clipboard"
                  >
                    {copiedIndex === `headline-${index}` ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "about" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-strong rounded-2xl p-6 md:p-8 shadow-soft"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Linkedin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  LinkedIn "About" Section
                </h3>
                <motion.button
                  onClick={() => copyToClipboard(linkedInAbout, "about")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-medium text-sm"
                >
                  {copiedIndex === "about" ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </motion.button>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {linkedInAbout}
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "summary" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-strong rounded-2xl p-6 md:p-8 shadow-soft"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <FileText className="w-5 h-5 text-primary-foreground" />
                  </div>
                  Resume Professional Summary
                </h3>
                <motion.button
                  onClick={() => copyToClipboard(resumeSummary, "summary")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-medium text-sm"
                >
                  {copiedIndex === "summary" ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </motion.button>
              </div>
              <p className="text-muted-foreground leading-relaxed">{resumeSummary}</p>
            </motion.div>
          )}

          {activeTab === "objective" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-strong rounded-2xl p-6 md:p-8 shadow-soft"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center shadow-lg">
                    <Target className="w-5 h-5 text-primary-foreground" />
                  </div>
                  Career Objective
                </h3>
                <motion.button
                  onClick={() => copyToClipboard(careerObjective, "objective")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-medium text-sm"
                >
                  {copiedIndex === "objective" ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </motion.button>
              </div>
              <p className="text-muted-foreground leading-relaxed">{careerObjective}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileContentSection;
