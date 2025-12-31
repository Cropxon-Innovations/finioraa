import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, FileCheck, Eye, Server, Key } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description: "Military-grade encryption for all data at rest and in transit."
  },
  {
    icon: FileCheck,
    title: "Immutable Audit Trail",
    description: "Every action is logged. Complete transparency with tamper-proof records."
  },
  {
    icon: Eye,
    title: "Read-Only Access",
    description: "We never initiate transactions. View-only connections to your accounts."
  },
  {
    icon: Server,
    title: "Indian Data Residency",
    description: "Your financial data stays in India, compliant with local regulations."
  },
  {
    icon: Key,
    title: "Zero-Knowledge Auth",
    description: "Your credentials are never stored. We use secure tokenized access."
  },
  {
    icon: Shield,
    title: "SOC 2 Compliant",
    description: "Enterprise-grade security controls audited by third parties."
  }
];

const SecuritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="security" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[150px]"
        animate={{ 
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium text-secondary uppercase tracking-wider">
              Security & Trust
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Your Data,
              <br />
              <span className="gradient-text">Fortress Protected</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We take security as seriously as you take your finances.
              Built with bank-level protection from day one, your data is encrypted, 
              immutable, and always under your control.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <Lock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">GDPR Ready</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <FileCheck className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">RBI Guidelines</span>
              </div>
            </div>
          </motion.div>

          {/* Right Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card rounded-xl p-5 hover:border-secondary/30 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-secondary mb-3" />
                <h4 className="font-semibold mb-1 text-sm">{feature.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
