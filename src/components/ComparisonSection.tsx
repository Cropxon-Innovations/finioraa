import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { useWaitlist } from "@/hooks/useWaitlist";

const competitors = [
  { name: "FINIORAA", highlight: true },
  { name: "Walnut", highlight: false },
  { name: "Money Manager", highlight: false },
  { name: "ETMONEY", highlight: false },
  { name: "PolicyBazaar", highlight: false },
];

const features = [
  { 
    category: "Core Finance",
    items: [
      { name: "Expense & Income Tracking", finioraa: true, walnut: true, moneyManager: true, etmoney: true, policyBazaar: false },
      { name: "Multi-Account Sync", finioraa: true, walnut: true, moneyManager: false, etmoney: true, policyBazaar: false },
      { name: "Budget & Goals", finioraa: true, walnut: true, moneyManager: true, etmoney: "partial", policyBazaar: false },
      { name: "Loans & EMI Tracking", finioraa: true, walnut: false, moneyManager: false, etmoney: true, policyBazaar: false },
      { name: "Net Worth Dashboard", finioraa: true, walnut: false, moneyManager: false, etmoney: true, policyBazaar: false },
    ]
  },
  {
    category: "Investments",
    items: [
      { name: "Mutual Fund Tracking", finioraa: true, walnut: false, moneyManager: false, etmoney: true, policyBazaar: false },
      { name: "Stock Portfolio", finioraa: true, walnut: false, moneyManager: false, etmoney: "partial", policyBazaar: false },
      { name: "SIP Management", finioraa: true, walnut: false, moneyManager: false, etmoney: true, policyBazaar: false },
      { name: "Investment Insights", finioraa: true, walnut: false, moneyManager: false, etmoney: true, policyBazaar: false },
    ]
  },
  {
    category: "Insurance",
    items: [
      { name: "Insurance Policy Tracking", finioraa: true, walnut: false, moneyManager: false, etmoney: false, policyBazaar: true },
      { name: "Premium Reminders", finioraa: true, walnut: false, moneyManager: false, etmoney: false, policyBazaar: true },
      { name: "Policy Comparison", finioraa: true, walnut: false, moneyManager: false, etmoney: false, policyBazaar: true },
      { name: "Best Rate Finder", finioraa: true, walnut: false, moneyManager: false, etmoney: false, policyBazaar: true },
      { name: "Claim Assistance", finioraa: "partial", walnut: false, moneyManager: false, etmoney: false, policyBazaar: true },
    ]
  },
  {
    category: "Advanced Features",
    items: [
      { name: "AI-Powered Insights", finioraa: true, walnut: false, moneyManager: false, etmoney: "partial", policyBazaar: false },
      { name: "Document Vault", finioraa: true, walnut: false, moneyManager: false, etmoney: false, policyBazaar: false },
      { name: "Immutable Ledger", finioraa: true, walnut: false, moneyManager: false, etmoney: false, policyBazaar: false },
      { name: "Subscription Tracking", finioraa: true, walnut: true, moneyManager: false, etmoney: false, policyBazaar: false },
      { name: "Family Finance", finioraa: true, walnut: false, moneyManager: false, etmoney: false, policyBazaar: false },
    ]
  },
  {
    category: "Security & Privacy",
    items: [
      { name: "Bank-Grade Encryption", finioraa: true, walnut: true, moneyManager: "partial", etmoney: true, policyBazaar: true },
      { name: "Data Stored in India", finioraa: true, walnut: true, moneyManager: false, etmoney: true, policyBazaar: true },
      { name: "No Data Selling", finioraa: true, walnut: false, moneyManager: true, etmoney: false, policyBazaar: false },
      { name: "Audit Trail", finioraa: true, walnut: false, moneyManager: false, etmoney: false, policyBazaar: false },
    ]
  },
];

const FeatureIcon = ({ value }: { value: boolean | string }) => {
  if (value === true) {
    return (
      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
        <Check className="w-4 h-4 text-emerald-400" />
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
        <Minus className="w-4 h-4 text-amber-400" />
      </div>
    );
  }
  return (
    <div className="w-6 h-6 rounded-full bg-muted/50 flex items-center justify-center">
      <X className="w-4 h-4 text-muted-foreground/50" />
    </div>
  );
};

const ComparisonSection = () => {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            FINIORAA vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Competition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how FINIORAA stacks up against other finance apps. We combine the best of expense tracking, 
            investments, and insurance management in one unified platform.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="min-w-[900px]">
            {/* Header */}
            <div className="grid grid-cols-6 gap-4 mb-6 sticky top-0 bg-background/95 backdrop-blur-sm py-4 z-20">
              <div className="col-span-1" />
              {competitors.map((competitor, index) => (
                <motion.div
                  key={competitor.name}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`text-center ${
                    competitor.highlight
                      ? "relative"
                      : ""
                  }`}
                >
                  {competitor.highlight && (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-xs font-semibold text-primary-foreground">
                      Best Choice
                    </div>
                  )}
                  <div
                    className={`py-4 px-2 rounded-xl ${
                      competitor.highlight
                        ? "bg-gradient-to-b from-primary/20 to-accent/10 border border-primary/30"
                        : "bg-card/50"
                    }`}
                  >
                    <p
                      className={`font-bold text-lg ${
                        competitor.highlight ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {competitor.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature Categories */}
            {features.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                {/* Category Header */}
                <div className="grid grid-cols-6 gap-4 mb-3">
                  <div className="col-span-6">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {category.category}
                    </h3>
                  </div>
                </div>

                {/* Feature Rows */}
                {category.items.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-6 gap-4 py-3 border-b border-border/30 hover:bg-card/30 transition-colors rounded-lg px-2"
                  >
                    <div className="col-span-1 flex items-center">
                      <span className="text-muted-foreground text-sm">{feature.name}</span>
                    </div>
                    <div className="flex justify-center items-center">
                      <FeatureIcon value={feature.finioraa} />
                    </div>
                    <div className="flex justify-center items-center">
                      <FeatureIcon value={feature.walnut} />
                    </div>
                    <div className="flex justify-center items-center">
                      <FeatureIcon value={feature.moneyManager} />
                    </div>
                    <div className="flex justify-center items-center">
                      <FeatureIcon value={feature.etmoney} />
                    </div>
                    <div className="flex justify-center items-center">
                      <FeatureIcon value={feature.policyBazaar} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mt-12 flex-wrap"
        >
          <div className="flex items-center gap-2">
            <FeatureIcon value={true} />
            <span className="text-sm text-muted-foreground">Full Support</span>
          </div>
          <div className="flex items-center gap-2">
            <FeatureIcon value="partial" />
            <span className="text-sm text-muted-foreground">Partial Support</span>
          </div>
          <div className="flex items-center gap-2">
            <FeatureIcon value={false} />
            <span className="text-sm text-muted-foreground">Not Available</span>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <div className="text-left">
              <h4 className="text-xl font-bold text-foreground mb-1">
                One App. Complete Financial Control.
              </h4>
              <p className="text-muted-foreground">
                Stop juggling multiple apps. FINIORAA brings expenses, investments, and insurance together.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openWaitlist}
              className="px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-xl font-semibold text-primary-foreground whitespace-nowrap"
            >
              Get Started Free
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
