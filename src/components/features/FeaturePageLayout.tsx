import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureDemoModal from "@/components/features/FeatureDemoModal";

interface FeaturePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  gradient: string;
  children: ReactNode;
  stats?: { label: string; value: string }[];
  demoType?: 'expense' | 'budget' | 'investment' | 'bill' | 'insurance' | 'ai' | 'predictions' | 'auto-actions' | 'analytics' | 'goals';
}

const FeaturePageLayout = ({
  title,
  subtitle,
  description,
  icon,
  gradient,
  children,
  stats,
  demoType
}: FeaturePageLayoutProps) => {
  const [showDemo, setShowDemo] = useState(false);
  
  return (
    <>
      {demoType && (
        <FeatureDemoModal
          isOpen={showDemo}
          onClose={() => setShowDemo(false)}
          featureType={demoType}
        />
      )}
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`} />
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                {icon}
                <span className="text-sm font-medium text-primary">{subtitle}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">{title}</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" className="group">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                {demoType && (
                  <Button variant="outline" size="xl" onClick={() => setShowDemo(true)}>
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </Button>
                )}
              </div>
            </motion.div>

            {/* Stats */}
            {stats && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 text-center"
                  >
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      {children}

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-5`} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Finances?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of Indians who have taken control of their financial future with FINIORAA.
            </p>
            <Button variant="hero" size="xl" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FeaturePageLayout;
