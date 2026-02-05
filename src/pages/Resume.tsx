import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ritesh_Resume.png";
    link.download = "Ritesh_Patil_Resume.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with actions */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md shadow-soft">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <Button
            variant="nav"
            onClick={handleDownload}
            className="gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </Button>
        </div>
      </div>

      {/* Resume Display */}
      <div className="flex-1 flex items-center justify-center pt-20 pb-8 px-4">
        <img
          src="/Ritesh_Resume.png"
          alt="Ritesh Patil Resume"
          className="max-w-full max-h-[calc(100vh-120px)] object-contain shadow-card rounded-lg"
        />
      </div>
    </div>
  );
};

export default Resume;
