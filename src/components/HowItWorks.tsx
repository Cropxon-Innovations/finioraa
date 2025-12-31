import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link2, Zap, Rocket } from "lucide-react";

const steps = [
  {
    icon: Link2,
    number: "01",
    title: "Connect",
    description: "Link your bank accounts, investment platforms, and credit cards securely. We never store your credentials.",
    color: "from-primary to-blue-400"
  },
  {
    icon: Zap,
    number: "02",
    title: "Automate",
    description: "Let FINIORAA categorize transactions, track investments, and alert you to unusual activity automatically.",
    color: "from-secondary to-emerald-400"
  },
  {
    icon: Rocket,
    number: "03",
    title: "Optimize",
    description: "Receive AI-powered insights, set smarter budgets, and watch your financial health improve over time.",
    color: "from-accent to-amber-400"
  }
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="py-24 relative overflow-hidden bg-card/30">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Get Started in
            <br />
            <span className="gradient-text">Three Simple Steps</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From signup to financial clarity in under 5 minutes.
            No complex setup, no manual entry required.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Card */}
                  <div className="glass-card rounded-3xl p-8 text-center relative z-10 bg-card hover:border-primary/30 transition-all duration-500">
                    {/* Number Badge */}
                    <motion.div 
                      className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-lg font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </motion.div>

                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mt-4 mb-6 shadow-xl`}>
                      <step.icon className="w-10 h-10 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
