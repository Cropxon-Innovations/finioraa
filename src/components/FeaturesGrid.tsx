import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Receipt, 
  Target, 
  CreditCard, 
  TrendingUp, 
  FolderLock, 
  Brain,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Receipt,
    title: "Expense & Income Tracking",
    description: "Auto-categorize every transaction. See where your money goes with intelligent tagging and beautiful visualizations.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Target,
    title: "Budgets & Goals",
    description: "Set smart budgets that adapt to your spending. Track goals with milestones and celebrate every achievement.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10"
  },
  {
    icon: CreditCard,
    title: "Loans, EMIs & Net Worth",
    description: "Track every EMI, visualize payoff timelines, and watch your net worth grow in real-time.",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: TrendingUp,
    title: "Investments & Subscriptions",
    description: "Monitor stocks, mutual funds, FDs, and recurring subscriptions. Never miss a renewal or dividend.",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10"
  },
  {
    icon: FolderLock,
    title: "Document Vault",
    description: "Securely store financial documents — tax returns, insurance policies, receipts. Encrypted and searchable.",
    color: "text-rose-400",
    bgColor: "bg-rose-500/10"
  },
  {
    icon: Brain,
    title: "AI Insights & Predictions",
    description: "Predictive analytics that forecast cash flow, detect anomalies, and suggest optimizations automatically.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10"
  }
];

const FeaturesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Everything You Need to
            <br />
            <span className="gradient-text">Master Your Money</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Six powerful modules working together to give you complete control
            over your financial life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
