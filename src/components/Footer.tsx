import { motion } from "framer-motion";
import { Linkedin, Mail, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-foreground overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground to-foreground/95" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-3xl font-bold text-background mb-2">
              <span className="text-primary">Ritesh</span> Patil
            </p>
            <p className="text-background/60">
              Software Developer • Full Stack Engineer • Problem Solver
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 mb-10"
          >
            <motion.a
              href="https://www.linkedin.com/in/ritesh-patil-3408a52a6"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -4 }}
              className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center hover:bg-primary transition-colors duration-200 group"
            >
              <Linkedin className="w-5 h-5 text-background group-hover:scale-110 transition-transform" />
            </motion.a>
            <motion.a
              href="mailto:ritesh.1personal@gmail.com"
              whileHover={{ scale: 1.1, y: -4 }}
              className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center hover:bg-primary transition-colors duration-200 group"
            >
              <Mail className="w-5 h-5 text-background group-hover:scale-110 transition-transform" />
            </motion.a>
            <motion.a
              href="https://github.com/ritesh1patil"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -4 }}
              className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center hover:bg-primary transition-colors duration-200 group"
            >
              <Github className="w-5 h-5 text-background group-hover:scale-110 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-button mb-10 group"
          >
            <ArrowUp className="w-5 h-5 text-primary-foreground group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-background/20 to-transparent mb-8" />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-background/50 text-sm flex items-center justify-center gap-1"
          >
            Made by Ritesh Patil • © 2026
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
