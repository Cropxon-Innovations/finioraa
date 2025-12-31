import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Lock, Lightbulb } from "lucide-react";

const solutions = [
  {
    icon: Database,
    title: "Single Source of Truth",
    description: "One unified platform that connects all your financial data — accounts, investments, loans, expenses, and more.",
    gradient: "from-primary to-blue-400"
  },
  {
    icon: Lock,
    title: "Immutable Ledger",
    description: "Every transaction is permanently recorded with an audit trail. No edits, no deletions — complete financial integrity.",
    gradient: "from-secondary to-emerald-400"
  },
  {
    icon: Lightbulb,
    title: "Explainable Finance",
    description: "AI that doesn't just predict — it explains. Understand the 'why' behind every insight and recommendation.",
    gradient: "from-accent to-amber-400"
  }
];

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Gradient Orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">
            The Solution
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Meet <span className="gradient-text">FINIORAA</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A Personal Finance Operating System designed for the modern Indian.
            Built on three unshakeable pillars.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Card */}
              <div className="glass-card rounded-3xl p-8 h-full relative overflow-hidden hover:border-primary/30 transition-all duration-500">
                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <solution.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {solution.description}
                </p>

                {/* Number Badge */}
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-lg font-bold text-muted-foreground">
                    {index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
