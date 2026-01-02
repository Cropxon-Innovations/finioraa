import { motion } from "framer-motion";
import { 
  PieChart, 
  Target, 
  TrendingUp, 
  Wallet,
  Bell,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";

const BudgetPlanning = () => {
  const budgets = [
    { category: "Food & Dining", spent: 12500, limit: 15000, color: "bg-orange-500" },
    { category: "Transportation", spent: 4200, limit: 5000, color: "bg-blue-500" },
    { category: "Entertainment", spent: 3800, limit: 3000, color: "bg-purple-500" },
    { category: "Shopping", spent: 8500, limit: 10000, color: "bg-pink-500" },
    { category: "Utilities", spent: 6200, limit: 8000, color: "bg-teal-500" },
  ];

  const features = [
    {
      icon: Target,
      title: "Goal-Based Budgets",
      description: "Set budgets aligned with your financial goals. AI adjusts limits based on your income and spending patterns."
    },
    {
      icon: Sparkles,
      title: "Smart Recommendations",
      description: "Get AI-powered suggestions on where to cut back and how much to allocate to each category."
    },
    {
      icon: Bell,
      title: "Proactive Alerts",
      description: "Receive warnings before you overspend, not after. Stay on track with timely notifications."
    },
    {
      icon: TrendingUp,
      title: "Rollover Budgets",
      description: "Unused budget rolls over to next month. Overspending? It gets adjusted automatically."
    }
  ];

  return (
    <FeaturePageLayout
      title="Budget Planning"
      subtitle="Platform"
      description="Intelligent budgets that adapt to your lifestyle. Set it once, and let FINIORAA's AI keep you on track with personalized limits and smart alerts."
      icon={<PieChart className="w-4 h-4 text-primary" />}
      gradient="from-emerald-500 to-teal-500"
      stats={[
        { label: "Avg Savings Increase", value: "23%" },
        { label: "Budget Adherence", value: "87%" },
        { label: "Goals Achieved", value: "15K+" },
        { label: "Active Budgets", value: "2M+" }
      ]}
    >
      {/* Live Budget Preview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Live Budget <span className="gradient-text">Tracker</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visual progress bars show exactly where you stand with each budget
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto p-8 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-semibold">January 2026</h3>
                <p className="text-muted-foreground">15 days remaining</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">₹35,200</div>
                <div className="text-sm text-muted-foreground">of ₹41,000 spent</div>
              </div>
            </div>

            <div className="space-y-6">
              {budgets.map((budget, index) => {
                const percentage = (budget.spent / budget.limit) * 100;
                const isOver = percentage > 100;
                
                return (
                  <motion.div
                    key={budget.category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${budget.color}`} />
                        <span className="font-medium">{budget.category}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={isOver ? "text-red-500 font-semibold" : ""}>
                          ₹{budget.spent.toLocaleString('en-IN')}
                        </span>
                        <span className="text-muted-foreground">
                          / ₹{budget.limit.toLocaleString('en-IN')}
                        </span>
                        {isOver ? (
                          <ArrowUpRight className="w-4 h-4 text-red-500" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4 text-emerald-500" />
                        )}
                      </div>
                    </div>
                    <div className="h-3 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min(percentage, 100)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                        className={`h-full rounded-full ${isOver ? 'bg-red-500' : budget.color}`}
                      />
                    </div>
                    {isOver && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs text-red-500 mt-1"
                      >
                        ⚠️ Over budget by ₹{(budget.spent - budget.limit).toLocaleString('en-IN')}
                      </motion.p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </FeaturePageLayout>
  );
};

export default BudgetPlanning;
