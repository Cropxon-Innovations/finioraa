import { motion } from "framer-motion";
import { 
  Wallet, 
  Tags, 
  PieChart, 
  TrendingDown, 
  Bell, 
  Smartphone,
  CreditCard,
  Receipt,
  ArrowDownUp
} from "lucide-react";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";

const ExpenseTracking = () => {
  const features = [
    {
      icon: Tags,
      title: "Smart Auto-Categorization",
      description: "AI automatically categorizes every transaction across 50+ categories. No manual tagging needed."
    },
    {
      icon: Smartphone,
      title: "SMS & Email Parsing",
      description: "Reads transaction SMS and bank emails to capture every expense in real-time."
    },
    {
      icon: CreditCard,
      title: "Multi-Account Sync",
      description: "Connect all your bank accounts, credit cards, and UPI apps in one unified view."
    },
    {
      icon: Receipt,
      title: "Receipt Scanning",
      description: "Snap photos of receipts for automatic data extraction and expense logging."
    },
    {
      icon: ArrowDownUp,
      title: "Split & Recurring",
      description: "Track shared expenses with friends and monitor recurring subscriptions easily."
    },
    {
      icon: Bell,
      title: "Real-time Alerts",
      description: "Get instant notifications for large expenses, unusual spending, or budget breaches."
    }
  ];

  const liveData = {
    todaySpent: 2450,
    weeklySpent: 18750,
    topCategory: "Food & Dining",
    transactions: [
      { name: "Swiggy Order", amount: 450, category: "Food", time: "2 hrs ago" },
      { name: "Amazon Shopping", amount: 1299, category: "Shopping", time: "5 hrs ago" },
      { name: "Uber Ride", amount: 189, category: "Transport", time: "Yesterday" },
      { name: "Netflix Subscription", amount: 649, category: "Entertainment", time: "2 days ago" },
    ]
  };

  return (
    <FeaturePageLayout
      title="Expense Tracking"
      subtitle="Platform"
      description="Every rupee, automatically tracked. From UPI payments to credit card swipes, FINIORAA captures and categorizes all your expenses without lifting a finger."
      icon={<Wallet className="w-4 h-4 text-primary" />}
      gradient="from-primary to-blue-500"
      stats={[
        { label: "Transactions Tracked", value: "50M+" },
        { label: "Accuracy Rate", value: "99.2%" },
        { label: "Categories", value: "50+" },
        { label: "Banks Supported", value: "190+" }
      ]}
    >
      {/* Live Preview Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Live Expense <span className="gradient-text">Dashboard</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how your expenses are tracked and visualized in real-time
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Summary Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-red-500" />
                </div>
                <span className="text-muted-foreground">Today's Spending</span>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.3 }}
                className="text-3xl font-bold"
              >
                ₹{liveData.todaySpent.toLocaleString('en-IN')}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <PieChart className="w-5 h-5 text-amber-500" />
                </div>
                <span className="text-muted-foreground">This Week</span>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.4 }}
                className="text-3xl font-bold"
              >
                ₹{liveData.weeklySpent.toLocaleString('en-IN')}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Tags className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground">Top Category</span>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.5 }}
                className="text-2xl font-bold gradient-text"
              >
                {liveData.topCategory}
              </motion.div>
            </motion.div>
          </div>

          {/* Transaction List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 p-6 rounded-2xl bg-card border border-border"
          >
            <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
            <div className="space-y-4">
              {liveData.transactions.map((tx, index) => (
                <motion.div
                  key={tx.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Receipt className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{tx.name}</div>
                      <div className="text-sm text-muted-foreground">{tx.category} • {tx.time}</div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-red-500">
                    -₹{tx.amount.toLocaleString('en-IN')}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful <span className="gradient-text">Features</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
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

export default ExpenseTracking;
