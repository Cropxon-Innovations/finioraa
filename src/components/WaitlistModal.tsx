import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Sparkles, Mail, User, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Please fill in required fields",
        description: "Name and email are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call - replace with actual waitlist submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Store in localStorage for tracking (replace with actual backend)
    const waitlistEntries = JSON.parse(localStorage.getItem("finioraa_waitlist") || "[]");
    waitlistEntries.push({
      ...formData,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("finioraa_waitlist", JSON.stringify(waitlistEntries));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "You're on the list! 🎉",
      description: "We'll notify you when FINIORAA launches.",
    });
  };

  const handleClose = () => {
    onClose();
    // Reset form after close animation
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "" });
      setIsSubmitted(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 p-4"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/20 to-transparent rounded-tr-full" />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors z-10"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {!isSubmitted ? (
                <>
                  {/* Header */}
                  <div className="text-center mb-6 relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4"
                    >
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Join the Waitlist</span>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-2">
                      Be First to Experience
                      <br />
                      <span className="gradient-text">FINIORAA</span>
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Get early access and exclusive launch benefits
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="pl-10 h-12 bg-muted/50 border-border/50 focus:border-primary"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-10 h-12 bg-muted/50 border-border/50 focus:border-primary"
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder="Phone Number (Optional)"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="pl-10 h-12 bg-muted/50 border-border/50 focus:border-primary"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      className="w-full h-12 group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="w-5 h-5" />
                        </motion.div>
                      ) : (
                        <>
                          Join Waitlist
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    🔒 Your data is secure. We never share your information.
                  </p>
                </>
              ) : (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 relative z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
                  >
                    <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-2">You're In! 🎉</h3>
                  <p className="text-muted-foreground mb-6">
                    Welcome to the FINIORAA family. We'll reach out soon with exclusive early access.
                  </p>
                  
                  <Button variant="glass" onClick={handleClose}>
                    Close
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;
