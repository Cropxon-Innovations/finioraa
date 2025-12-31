import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Boxes, Globe, Plug, Zap, Users, Infinity } from "lucide-react";

const futurePoints = [
  {
    icon: Boxes,
    title: "Modular Architecture",
    description: "Add only what you need. Every feature is a building block."
  },
  {
    icon: Globe,
    title: "Multi-Currency Ready",
    description: "Seamless support for international transactions and currencies."
  },
  {
    icon: Plug,
    title: "API-First Design",
    description: "Integrate with any platform through our robust APIs."
  },
  {
    icon: Zap,
    title: "Real-Time Sync",
    description: "Data updates instantly across all your devices."
  },
  {
    icon: Users,
    title: "Family Mode Coming",
    description: "Manage household finances together with role-based access."
  },
  {
    icon: Infinity,
    title: "Infinite Scalability",
    description: "Built on modern cloud infrastructure that grows with you."
  }
];

const FutureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%),
                             linear-gradient(-45deg, hsl(var(--primary)) 25%, transparent 25%),
                             linear-gradient(45deg, transparent 75%, hsl(var(--primary)) 75%),
                             linear-gradient(-45deg, transparent 75%, hsl(var(--primary)) 75%)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Built for Tomorrow
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Future-Ready
            <br />
            <span className="gradient-text-gold">Architecture</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            FINIORAA is designed to evolve with your needs.
            A platform that's ready for what's next.
          </p>
        </motion.div>

        {/* Hexagonal Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {futurePoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <point.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2 text-sm md:text-base">{point.title}</h4>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
