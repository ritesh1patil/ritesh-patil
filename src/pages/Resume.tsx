import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const pdfResumeUrl = "/Ritesh_Resume.pdf";
const resumeImageUrl = "/Ritesh_Resume.png";

const Resume = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfResumeUrl;
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

      {/* Resume Display - Full page image fits viewport without scrolling */}
      <div className="flex-1 min-h-0 flex items-center justify-center p-4">
        <img
          src={resumeImageUrl}
          alt="Ritesh Patil Resume"
          className="max-w-full max-h-[calc(100vh-64px)] object-contain shadow-card rounded-lg border border-border"
        />
      </div>
    </div>
  );
};

export default Resume;
