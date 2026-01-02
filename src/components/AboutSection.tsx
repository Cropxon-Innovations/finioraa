import { motion } from "framer-motion";
import { 
  Brain, 
  Calculator, 
  Shield, 
  FileCheck, 
  Lock, 
  IndianRupee,
  Sparkles,
  Layers,
  Cpu
} from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Intelligent Financial Insights",
    description: "Automatically detects spending patterns, projects cash flow, and identifies financial risks.",
    gradient: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Calculator,
    title: "Real-World Loan & EMI Accuracy",
    description: "Manages all liabilities using real banking mathematics for auditable precision.",
    gradient: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Shield,
    title: "Critical Insurance Protection",
    description: "Organizes and compares policies to reveal coverage gaps and renewal risks.",
    gradient: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/10",
  },
];

const foundations = [
  {
    icon: FileCheck,
    title: "Immutable Audit Trail",
    description: "Every transaction and correction leaves a permanent record; nothing is ever deleted.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security & Data Ownership",
    description: "Features AES-256 encryption with all financial data stored securely in India.",
  },
  {
    icon: IndianRupee,
    title: "Designed for India",
    description: "A rupee-native and regulation-aware system aligned with India's financial ecosystem.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Background elements */}
      <div className="absolute inset-0 wave-bg opacity-50" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About FINIORAA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Financial Chaos to a{" "}
            <span className="gradient-text">Unified System</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your financial life is fragmented. Managing money across isolated apps, statements, 
            and spreadsheets creates blind spots. FINIORAA is a complete operating system that 
            unifies every financial signal into one intelligent and connected system.
          </p>
        </motion.div>

        {/* Central visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl glow-primary">
              <Layers className="w-16 h-16 md:w-20 md:h-20 text-primary-foreground" />
            </div>
            <motion.div
              className="absolute -inset-4 rounded-3xl border-2 border-primary/30"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -inset-8 rounded-3xl border border-primary/20"
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Core Financial Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Core Financial Pillars</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl ${pillar.bgColor} border border-border/50 overflow-hidden group`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.gradient}`} />
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-4`}>
                <pillar.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2">{pillar.title}</h4>
              <p className="text-muted-foreground text-sm">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Foundation blocks */}
        <div className="grid md:grid-cols-3 gap-6">
          {foundations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Sparkles className="w-5 h-5 text-accent" />
            <span>Powered by CROPXON Technologies</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
