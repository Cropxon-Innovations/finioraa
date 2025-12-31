import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, CreditCard, Wallet, PiggyBank, Target } from "lucide-react";

const AnimatedNumber = ({ value, prefix = "", suffix = "", delay = 0 }: { value: number; prefix?: string; suffix?: string; delay?: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay }}
      >
        {prefix}{value.toLocaleString('en-IN')}{suffix}
      </motion.span>
    </motion.span>
  );
};

const TransactionItem = ({ 
  name, 
  category, 
  amount, 
  type, 
  delay 
}: { 
  name: string; 
  category: string; 
  amount: number; 
  type: 'income' | 'expense'; 
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-muted/30 transition-colors"
  >
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${type === 'income' ? 'bg-secondary/20' : 'bg-destructive/20'}`}>
        {type === 'income' ? (
          <ArrowDownRight className="w-4 h-4 text-secondary" />
        ) : (
          <ArrowUpRight className="w-4 h-4 text-destructive" />
        )}
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{category}</p>
      </div>
    </div>
    <span className={`text-sm font-semibold ${type === 'income' ? 'text-secondary' : 'text-destructive'}`}>
      {type === 'income' ? '+' : '-'}₹{amount.toLocaleString('en-IN')}
    </span>
  </motion.div>
);

const StatCard = ({ 
  icon: Icon, 
  label, 
  value, 
  trend, 
  trendValue, 
  delay,
  color
}: { 
  icon: React.ElementType; 
  label: string; 
  value: string; 
  trend: 'up' | 'down'; 
  trendValue: string;
  delay: number;
  color: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-4"
  >
    <div className="flex items-center justify-between mb-2">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className={`flex items-center gap-1 text-xs ${trend === 'up' ? 'text-secondary' : 'text-destructive'}`}>
        {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
        {trendValue}
      </div>
    </div>
    <p className="text-xs text-muted-foreground mb-1">{label}</p>
    <p className="text-lg font-bold text-foreground">{value}</p>
  </motion.div>
);

const SpendingBar = ({ category, amount, total, color, delay }: { category: string; amount: number; total: number; color: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="space-y-1.5"
  >
    <div className="flex justify-between text-xs">
      <span className="text-muted-foreground">{category}</span>
      <span className="text-foreground font-medium">₹{amount.toLocaleString('en-IN')}</span>
    </div>
    <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${(amount / total) * 100}%` }}
        transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
        className={`h-full rounded-full ${color}`}
      />
    </div>
  </motion.div>
);

const DashboardPreview = () => {
  const transactions = [
    { name: "Salary Credited", category: "Income", amount: 85000, type: 'income' as const },
    { name: "Swiggy Order", category: "Food & Dining", amount: 450, type: 'expense' as const },
    { name: "Amazon Prime", category: "Subscriptions", amount: 1499, type: 'expense' as const },
    { name: "Freelance Project", category: "Side Income", amount: 15000, type: 'income' as const },
    { name: "Electricity Bill", category: "Utilities", amount: 2340, type: 'expense' as const },
  ];

  const spending = [
    { category: "Housing & Rent", amount: 25000, color: "bg-primary" },
    { category: "Food & Groceries", amount: 12500, color: "bg-secondary" },
    { category: "Transportation", amount: 8000, color: "bg-accent" },
    { category: "Entertainment", amount: 5500, color: "bg-chart-4" },
  ];

  const totalSpending = 51000;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="relative mx-auto max-w-5xl mt-16 px-4"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl -z-10" />
      
      {/* Browser Frame */}
      <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden shadow-2xl">
        {/* Browser Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-accent/60" />
            <div className="w-3 h-3 rounded-full bg-secondary/60" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-background/50 rounded-md px-3 py-1.5 text-xs text-muted-foreground flex items-center justify-center gap-2">
              <span className="text-secondary">🔒</span>
              app.finioraa.com/dashboard
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 md:p-6 bg-background/50">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-lg font-semibold text-foreground"
              >
                Good Morning, Priya 👋
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-sm text-muted-foreground"
              >
                Here's your financial overview for December 2024
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="flex items-center gap-2 px-3 py-2 bg-secondary/10 rounded-lg border border-secondary/30"
            >
              <TrendingUp className="w-4 h-4 text-secondary" />
              <span className="text-sm text-secondary font-medium">Savings Goal: 78% Complete</span>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <StatCard
              icon={Wallet}
              label="Net Worth"
              value="₹12,45,000"
              trend="up"
              trendValue="+12.5%"
              delay={1.4}
              color="bg-primary/20 text-primary"
            />
            <StatCard
              icon={CreditCard}
              label="This Month Spend"
              value="₹51,289"
              trend="down"
              trendValue="-8.2%"
              delay={1.5}
              color="bg-destructive/20 text-destructive"
            />
            <StatCard
              icon={PiggyBank}
              label="Savings"
              value="₹33,711"
              trend="up"
              trendValue="+15.3%"
              delay={1.6}
              color="bg-secondary/20 text-secondary"
            />
            <StatCard
              icon={Target}
              label="Investments"
              value="₹4,85,000"
              trend="up"
              trendValue="+22.1%"
              delay={1.7}
              color="bg-accent/20 text-accent"
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Recent Transactions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-foreground">Recent Transactions</h4>
                <span className="text-xs text-primary cursor-pointer hover:underline">View All</span>
              </div>
              <div className="space-y-1">
                {transactions.map((tx, index) => (
                  <TransactionItem
                    key={tx.name}
                    {...tx}
                    delay={1.9 + index * 0.1}
                  />
                ))}
              </div>
            </motion.div>

            {/* Spending Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-foreground">Spending Breakdown</h4>
                <span className="text-xs text-muted-foreground">December 2024</span>
              </div>
              <div className="space-y-4">
                {spending.map((item, index) => (
                  <SpendingBar
                    key={item.category}
                    {...item}
                    total={totalSpending}
                    delay={2.1 + index * 0.1}
                  />
                ))}
              </div>
              
              {/* AI Insight */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.6 }}
                className="mt-4 p-3 bg-primary/10 border border-primary/30 rounded-lg"
              >
                <div className="flex items-start gap-2">
                  <span className="text-lg">✨</span>
                  <div>
                    <p className="text-xs font-medium text-primary">AI Insight</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Your food spending is 15% lower than last month. Keep it up to reach your savings goal faster!
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardPreview;
