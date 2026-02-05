import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Linkedin, FileText } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold text-foreground">
            <span className="text-gradient">Ritesh</span> Patil
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a href="/resume">
              <Button variant="nav" size="default">
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/ritesh-patil-3408a52a6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="nav" size="default">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-card rounded-2xl shadow-card p-6 mb-4"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-border flex flex-col gap-3">
                <a href="/resume">
                  <Button variant="nav" className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Resume
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/ritesh-patil-3408a52a6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="nav" className="w-full">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
