import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Sparkles, TrendingUp, AlertCircle, LineChart, MessageSquare } from "lucide-react";

const aiFeatures = [
  {
    icon: TrendingUp,
    title: "Cash Flow Forecasting",
    description: "Predict your financial future with ML-powered projections up to 12 months ahead."
  },
  {
    icon: AlertCircle,
    title: "Anomaly Detection",
    description: "Instant alerts when spending patterns deviate. Catch fraud and overspending early."
  },
  {
    icon: LineChart,
    title: "Smart Categorization",
    description: "AI learns your spending habits and auto-categorizes transactions with 99% accuracy."
  },
  {
    icon: MessageSquare,
    title: "Natural Language Queries",
    description: "Ask questions like 'How much did I spend on food last month?' and get instant answers."
  }
];

const AISection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ai" ref={ref} className="py-24 relative overflow-hidden bg-card/30">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-secondary"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-accent"
          animate={{ 
            x: [0, 60, 0],
            y: [0, 40, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powered by AI</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Intelligence That
            <br />
            <span className="gradient-text">Explains Itself</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our AI doesn't just crunch numbers — it tells you why.
            Every insight comes with clear explanations you can trust.
          </p>
        </motion.div>

        {/* Main AI Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* AI Brain Visual */}
              <motion.div 
                className="relative"
                animate={{ 
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
                  <Brain className="w-16 h-16 md:w-20 md:h-20 text-primary-foreground" />
                  
                  {/* Orbiting dots */}
                  <motion.div
                    className="absolute w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute -top-2 left-1/2 w-4 h-4 rounded-full bg-accent" />
                  </motion.div>
                  <motion.div
                    className="absolute w-full h-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-1/2 -right-2 w-3 h-3 rounded-full bg-secondary" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Explainable AI at its Core
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Unlike black-box algorithms, FINIORAA's AI shows its work.
                  See confidence scores, understand reasoning, and make informed
                  decisions with complete transparency.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;
