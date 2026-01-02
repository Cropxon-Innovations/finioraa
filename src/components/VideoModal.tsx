import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  const videoUrl = "https://wppcegrusnrlleslcwxf.supabase.co/storage/v1/object/public/finioraa/finioraa_1.mp4";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] p-0 bg-card/95 backdrop-blur-xl border-border/50 overflow-hidden">
        <DialogTitle className="sr-only">FINIORAA Introduction Video</DialogTitle>
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video Player */}
          <div className="aspect-video bg-black">
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video Info */}
          <div className="p-6 bg-gradient-to-t from-card to-card/80">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Discover <span className="gradient-text">FINIORAA</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Your complete personal finance operating system. Track, understand, and optimize every rupee.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
