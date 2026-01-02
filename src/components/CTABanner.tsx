import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useWaitlist } from "@/hooks/useWaitlist";

const CTABanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { openWaitlist } = useWaitlist();

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] rounded-full bg-primary/10 blur-[150px]"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/20 to-transparent rounded-tl-full" />

            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Start Free Today</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your
              <br />
              <span className="gradient-text">Financial Life?</span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Join thousands of Indians who are taking control of their money.
              Start with our free tier — no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" className="group" onClick={openWaitlist}>
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl">
                Schedule a Demo
              </Button>
            </div>

            {/* Trust Line */}
            <p className="mt-10 text-sm text-muted-foreground">
              🔒 Bank-grade security • ⚡ 5-minute setup • 💳 No credit card required
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
