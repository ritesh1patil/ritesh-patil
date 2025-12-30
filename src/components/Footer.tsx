import { Linkedin, Mail, Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-background mb-2">
              <span className="text-primary">Ritesh</span> Patil
            </p>
            <p className="text-background/60 text-sm">
              Software Developer • Full Stack Engineer • Problem Solver
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/ritesh-patil-3408a52a6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5 text-background" />
            </a>
            <a
              href="mailto:contact@riteshpatil.dev"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
            >
              <Mail className="w-5 h-5 text-background" />
            </a>
            <a
              href="https://github.com/riteshpatil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
            >
              <Github className="w-5 h-5 text-background" />
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-background/50 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Ritesh Patil • © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
