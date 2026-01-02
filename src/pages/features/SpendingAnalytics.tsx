import { motion } from "framer-motion";
import { BarChart3, PieChart } from "lucide-react";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";

const SpendingAnalytics = () => {
  const categories = [
    { name: "Food & Dining", amount: 15000, percentage: 30, color: "bg-orange-500" },
    { name: "Shopping", amount: 12000, percentage: 24, color: "bg-pink-500" },
    { name: "Transport", amount: 8000, percentage: 16, color: "bg-blue-500" },
    { name: "Entertainment", amount: 7500, percentage: 15, color: "bg-purple-500" },
    { name: "Utilities", amount: 7500, percentage: 15, color: "bg-teal-500" },
  ];

  return (
    <FeaturePageLayout
      title="Spending Analytics"
      subtitle="Intelligence"
      description="Deep dive into your spending habits with beautiful visualizations. Understand where your money goes and discover opportunities to save."
      icon={<BarChart3 className="w-4 h-4 text-secondary" />}
      gradient="from-pink-500 to-rose-500"
      stats={[{ label: "Categories", value: "50+" }, { label: "Insights/Month", value: "100+" }, { label: "Data Points", value: "10M+" }, { label: "Reports", value: "Weekly" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-xl font-semibold mb-6">Spending Breakdown</h3>
            <div className="space-y-4">
              {categories.map((cat, i) => (
                <motion.div key={cat.name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{cat.name}</span>
                    <span>₹{cat.amount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="h-3 rounded-full bg-muted overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${cat.percentage}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} className={`h-full rounded-full ${cat.color}`} />
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

export default SpendingAnalytics;
