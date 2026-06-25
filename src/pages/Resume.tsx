import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const resumeUrl = "/Ritesh_Resume.pdf";

const Resume = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Ritesh_Patil_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Header with actions */}
      <div className="shrink-0 bg-card/90 backdrop-blur-md shadow-soft">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
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

      {/* Resume Display - PDF fills remaining viewport */}
      <div className="flex-1 min-h-0">
        <iframe
          src={resumeUrl}
          title="Ritesh Patil Resume"
          className="w-full h-full bg-card"
        />
      </div>
    </div>
  );
};

export default Resume;
