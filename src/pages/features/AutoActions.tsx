import { motion } from "framer-motion";
import { Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";

const AutoActions = () => {
  const automations = [
    { name: "Auto-save 10% of salary", status: "active", saved: "₹7,500/mo" },
    { name: "Round-up spare change to investments", status: "active", saved: "₹1,200/mo" },
    { name: "Move excess to FD when balance > ₹50K", status: "active", saved: "₹15,000/mo" },
    { name: "Pay credit card before due date", status: "active", saved: "₹0 late fees" },
  ];

  return (
    <FeaturePageLayout
      title="Auto-Actions"
      subtitle="Intelligence"
      description="Set it and forget it. Automated savings, investments, and payments that work in the background while you focus on living your life."
      icon={<Zap className="w-4 h-4 text-secondary" />}
      gradient="from-amber-500 to-orange-500"
      demoType="auto-actions"
      stats={[{ label: "Active Automations", value: "500K+" }, { label: "Auto-Saved", value: "₹50Cr+" }, { label: "Late Fees Avoided", value: "₹2Cr+" }, { label: "Users", value: "80K+" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-xl font-semibold mb-6">Your Automations</h3>
            <div className="space-y-4">
              {automations.map((auto, i) => (
                <motion.div key={auto.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>{auto.name}</span>
                  </div>
                  <span className="text-emerald-500 font-medium">{auto.saved}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </FeaturePageLayout>
  );
};

export default AutoActions;
