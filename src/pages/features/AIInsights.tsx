import { motion } from "framer-motion";
import { Brain, Sparkles, TrendingUp, PiggyBank, Target, Lightbulb } from "lucide-react";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";

const AIInsights = () => {
  const insights = [
    { type: "saving", title: "You could save ₹4,500/month", description: "Reduce dining out by 20% based on your patterns", icon: PiggyBank, color: "text-emerald-500" },
    { type: "alert", title: "Subscription overlap detected", description: "You're paying for both Spotify and YouTube Premium", icon: Lightbulb, color: "text-amber-500" },
    { type: "investment", title: "Increase SIP by ₹2,000", description: "Your income grew 15% but investments stayed same", icon: TrendingUp, color: "text-blue-500" },
    { type: "goal", title: "Emergency fund milestone", description: "You're 80% towards your 6-month expense goal", icon: Target, color: "text-purple-500" },
  ];

  return (
    <FeaturePageLayout
      title="AI Insights"
      subtitle="Intelligence"
      description="Personalized financial advice powered by advanced AI. Get actionable recommendations tailored to your unique spending patterns and goals."
      icon={<Brain className="w-4 h-4 text-secondary" />}
      gradient="from-secondary to-purple-500"
      stats={[
        { label: "Insights Generated", value: "5M+" },
        { label: "Avg Savings/User", value: "₹8,500/mo" },
        { label: "Accuracy Rate", value: "94%" },
        { label: "Goals Achieved", value: "25K+" }
      ]}
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Personal <span className="gradient-text">AI Advisor</span></h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {insights.map((insight, index) => (
              <motion.div key={insight.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center`}>
                    <insight.icon className={`w-6 h-6 ${insight.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{insight.title}</h3>
                    <p className="text-muted-foreground text-sm">{insight.description}</p>
                  </div>
                  <Sparkles className="w-5 h-5 text-secondary ml-auto" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </FeaturePageLayout>
  );
};

export default AIInsights;
