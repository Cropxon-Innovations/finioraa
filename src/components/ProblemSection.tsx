import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Layers, Clock, EyeOff } from "lucide-react";

const problems = [
  {
    icon: Layers,
    title: "Fragmented Tools",
    description: "Juggling multiple apps for expenses, investments, loans, and budgets creates chaos, not clarity."
  },
  {
    icon: Clock,
    title: "Manual Tracking",
    description: "Hours wasted updating spreadsheets that are outdated the moment you close them."
  },
  {
    icon: EyeOff,
    title: "No Real Visibility",
    description: "No single view of your complete financial health. Critical insights hidden in silos."
  },
  {
    icon: AlertTriangle,
    title: "Reactive Decisions",
    description: "Without predictions and alerts, you're always reacting to financial problems instead of preventing them."
  }
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-destructive uppercase tracking-wider">
            The Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Why Traditional Finance
            <br />
            <span className="gradient-text">Tracking Fails</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            In a world of complex finances, scattered tools lead to scattered decisions.
            You deserve better than chaos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group glass-card rounded-2xl p-8 hover:border-destructive/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
