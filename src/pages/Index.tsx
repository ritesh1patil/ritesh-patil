import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProfileContentSection from "@/components/ProfileContentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ritesh Patil | Software Developer & Full Stack Engineer</title>
        <meta
          name="description"
          content="Ritesh Patil - Software Developer specializing in React.js, Node.js, and full-stack development. Computer Engineering student with experience at Jio Platforms & Google. Open to opportunities."
        />
        <meta
          name="keywords"
          content="Ritesh Patil, Software Developer, Full Stack Developer, React Developer, Frontend Developer, Web Developer, Mumbai, India"
        />
        <meta name="author" content="Ritesh Patil" />
        <link rel="canonical" href="https://riteshpatil.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ritesh Patil | Software Developer" />
        <meta
          property="og:description"
          content="Software Developer specializing in React.js, Node.js, and full-stack development. Open to opportunities."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://riteshpatil.dev" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ritesh Patil | Software Developer" />
        <meta
          name="twitter:description"
          content="Software Developer specializing in React.js, Node.js, and full-stack development."
        />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProfileContentSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
