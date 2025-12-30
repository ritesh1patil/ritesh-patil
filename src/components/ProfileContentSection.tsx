import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, Linkedin, FileText, User, Target } from "lucide-react";

const linkedInHeadlines = [
  "Software Developer | React.js & Node.js | Jio & Google Experience | Building Scalable Web Solutions",
  "Full Stack Developer | Computer Engineering Student | Former Jio Intern | Open to Opportunities",
  "Frontend Developer | React.js Specialist | Google Student Ambassador | Passionate Problem Solver",
  "Web Developer | B.E. Computer Engineering | Jio Platforms Alum | Turning Ideas into Code",
  "Software Engineer | Full Stack | Data Science Enthusiast | Ready to Build the Future of Tech",
];

const linkedInAbout = `I'm a driven Computer Engineering student at Mumbai University with a proven track record of delivering impactful software solutions. My journey spans from developing responsive React.js interfaces at Jio Platforms Limited to representing Google as a Student Ambassador on campus.

What sets me apart:
• Hands-on experience building production-ready web applications using React.js, Node.js, and modern JavaScript frameworks
• Proven ability to collaborate in cross-functional teams and deliver under real-world constraints
• Strong foundation in both frontend development and backend API integration
• Passionate about writing clean, maintainable code that solves real problems

Currently pursuing my B.E. in Computer Engineering (Expected 2026), I'm actively seeking opportunities where I can contribute my technical skills while continuing to grow as a developer. Whether it's crafting pixel-perfect UIs, optimizing application performance, or building scalable backend solutions—I'm ready for the challenge.

Let's connect and explore how I can add value to your team.`;

const resumeSummary = `Results-driven Software Developer with hands-on experience at Jio Platforms Limited and recognition as a Google Student Ambassador. Proficient in React.js, Node.js, JavaScript, and full-stack development with a strong foundation in building responsive, user-centric web applications. Demonstrated ability to integrate APIs, implement database operations, and deliver scalable solutions in collaborative team environments. Currently pursuing B.E. in Computer Engineering from Mumbai University (Expected 2026). Eager to leverage technical expertise and problem-solving skills to contribute to innovative technology solutions at leading organizations.`;

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
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
            PROFESSIONAL PROFILE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready-to-Use <span className="text-gradient">Content</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professionally crafted content for LinkedIn, resume, and portfolio use
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-button"
                  : "bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground border border-border"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
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
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 shadow-soft border border-border flex items-start justify-between gap-4 group hover:shadow-card transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-bold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-foreground font-medium leading-relaxed">{headline}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(headline, `headline-${index}`)}
                    className="flex-shrink-0 p-2 rounded-lg bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    title="Copy to clipboard"
                  >
                    {copiedIndex === `headline-${index}` ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === "about" && (
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Linkedin className="w-5 h-5 text-primary" />
                  LinkedIn "About" Section
                </h3>
                <button
                  onClick={() => copyToClipboard(linkedInAbout, "about")}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-medium text-sm"
                >
                  {copiedIndex === "about" ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {linkedInAbout}
                </p>
              </div>
            </div>
          )}

          {activeTab === "summary" && (
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Resume Professional Summary
                </h3>
                <button
                  onClick={() => copyToClipboard(resumeSummary, "summary")}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-medium text-sm"
                >
                  {copiedIndex === "summary" ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <p className="text-muted-foreground leading-relaxed">{resumeSummary}</p>
            </div>
          )}

          {activeTab === "objective" && (
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Career Objective
                </h3>
                <button
                  onClick={() => copyToClipboard(careerObjective, "objective")}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-medium text-sm"
                >
                  {copiedIndex === "objective" ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <p className="text-muted-foreground leading-relaxed">{careerObjective}</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileContentSection;
