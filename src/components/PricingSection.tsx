import { motion } from "framer-motion";
import { Check, Star, Zap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/hooks/useWaitlist";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for getting started with personal finance tracking",
    icon: Star,
    features: [
      "Track up to 100 transactions/month",
      "Basic expense categories",
      "Monthly spending reports",
      "Single bank account sync",
      "Mobile app access",
      "Email support",
    ],
    notIncluded: [
      "AI insights & predictions",
      "Investment tracking",
      "Document vault",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "₹299",
    period: "/month",
    description: "For individuals serious about financial mastery",
    icon: Zap,
    features: [
      "Unlimited transactions",
      "Advanced AI insights & predictions",
      "Investment portfolio tracking",
      "Unlimited bank account syncs",
      "Document vault (10GB)",
      "Budget & goal automation",
      "Net worth tracking",
      "Priority support",
      "Export to Excel/PDF",
    ],
    notIncluded: [],
    cta: "Get Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For families and small businesses needing full control",
    icon: Building2,
    features: [
      "Everything in Pro",
      "Multi-user access (up to 10)",
      "Shared family/business dashboards",
      "Unlimited document storage",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "On-premise deployment option",
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Pricing Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-gold bg-clip-text text-transparent">
              Financial Journey
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start free and upgrade as you grow. All plans include bank-grade security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/20 via-card to-card border-2 border-primary shadow-2xl shadow-primary/20"
                  : "bg-card/50 border border-border/50 backdrop-blur-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${plan.popular ? "bg-primary/20" : "bg-muted"}`}>
                  <plan.icon className={`w-6 h-6 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <p className="text-muted-foreground text-sm mb-6">
                {plan.description}
              </p>

              <Button
                className={`w-full mb-8 ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
                onClick={openWaitlist}
              >
                {plan.cta}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
                {plan.notIncluded.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 opacity-40">
                    <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                    </div>
                    <span className="text-sm line-through">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          All prices are in INR. GST applicable. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
