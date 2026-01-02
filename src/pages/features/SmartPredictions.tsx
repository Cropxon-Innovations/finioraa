import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Calendar, ArrowUpRight } from "lucide-react";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";

const SmartPredictions = () => {
  return (
    <FeaturePageLayout
      title="Smart Predictions"
      subtitle="Intelligence"
      description="AI-powered cash flow forecasting. Know exactly how much you'll have at month end, predict upcoming expenses, and plan ahead with confidence."
      icon={<Sparkles className="w-4 h-4 text-secondary" />}
      gradient="from-violet-500 to-purple-500"
      demoType="predictions"
      stats={[{ label: "Prediction Accuracy", value: "92%" }, { label: "Days Ahead", value: "90" }, { label: "Users", value: "50K+" }, { label: "Predictions/Day", value: "1M+" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-xl font-semibold mb-6">Cash Flow Forecast</h3>
            <div className="space-y-4">
              {["Jan 15", "Jan 31", "Feb 15", "Feb 28"].map((date, i) => (
                <motion.div key={date} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <span>{date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-500">
                    <span className="font-semibold">₹{(45000 + i * 12000).toLocaleString('en-IN')}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </FeaturePageLayout>
  );
};

export default SmartPredictions;
