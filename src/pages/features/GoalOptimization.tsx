import { motion } from "framer-motion";
import { Target, TrendingUp } from "lucide-react";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";

const GoalOptimization = () => {
  const goals = [
    { name: "Emergency Fund", current: 180000, target: 300000, color: "bg-emerald-500" },
    { name: "Vacation", current: 45000, target: 100000, color: "bg-blue-500" },
    { name: "New Car", current: 250000, target: 800000, color: "bg-purple-500" },
  ];

  return (
    <FeaturePageLayout
      title="Goal Optimization"
      subtitle="Intelligence"
      description="AI-powered goal tracking that adapts to your financial situation. Achieve your dreams faster with optimized saving strategies."
      icon={<Target className="w-4 h-4 text-secondary" />}
      gradient="from-emerald-500 to-teal-500"
      stats={[{ label: "Goals Created", value: "100K+" }, { label: "Achieved", value: "45K+" }, { label: "Avg Time Saved", value: "3 months" }, { label: "Success Rate", value: "78%" }]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto space-y-6">
            {goals.map((goal, i) => (
              <motion.div key={goal.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex justify-between mb-4">
                  <h3 className="font-semibold">{goal.name}</h3>
                  <span className="text-muted-foreground">{Math.round((goal.current / goal.target) * 100)}%</span>
                </div>
                <div className="h-4 rounded-full bg-muted overflow-hidden mb-2">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${(goal.current / goal.target) * 100}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className={`h-full rounded-full ${goal.color}`} />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>₹{goal.current.toLocaleString('en-IN')}</span>
                  <span>₹{goal.target.toLocaleString('en-IN')}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </FeaturePageLayout>
  );
};

export default GoalOptimization;
