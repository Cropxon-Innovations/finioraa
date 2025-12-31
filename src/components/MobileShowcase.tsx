import { motion } from "framer-motion";
import { 
  Wallet, 
  TrendingUp, 
  PieChart, 
  Bell, 
  ArrowUpRight, 
  ArrowDownRight,
  Target,
  CreditCard,
  Sparkles,
  ChevronRight
} from "lucide-react";

const PhoneFrame = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className={`relative ${className}`}
  >
    {/* Phone Frame */}
    <div className="relative bg-card border-4 border-border/80 rounded-[3rem] p-2 shadow-2xl">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-card rounded-b-2xl z-20" />
      
      {/* Screen */}
      <div className="relative bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-2 text-xs text-muted-foreground z-10">
          <span className="font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2.5 border border-muted-foreground/50 rounded-sm">
              <div className="w-3/4 h-full bg-secondary rounded-sm" />
            </div>
          </div>
        </div>
        
        {children}
      </div>
    </div>

    {/* Glow Effect */}
    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl -z-10 opacity-50" />
  </motion.div>
);

const DashboardScreen = () => (
  <div className="pt-8 px-4 pb-4 h-full flex flex-col">
    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <div>
        <p className="text-[10px] text-muted-foreground">Good Morning</p>
        <p className="text-sm font-semibold text-foreground">Priya Sharma</p>
      </div>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
      >
        <Bell className="w-4 h-4 text-primary" />
      </motion.div>
    </div>

    {/* Balance Card */}
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-primary via-primary/90 to-secondary p-4 rounded-2xl mb-4"
    >
      <p className="text-[10px] text-primary-foreground/70 mb-1">Total Balance</p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-2xl font-bold text-primary-foreground"
      >
        ₹12,45,000
      </motion.p>
      <div className="flex items-center gap-1 mt-2">
        <TrendingUp className="w-3 h-3 text-secondary" />
        <span className="text-[10px] text-primary-foreground/80">+12.5% this month</span>
      </div>
    </motion.div>

    {/* Quick Stats */}
    <div className="grid grid-cols-2 gap-2 mb-4">
      <div className="bg-card/60 border border-border/50 rounded-xl p-3">
        <div className="flex items-center gap-2 mb-1">
          <ArrowDownRight className="w-3 h-3 text-secondary" />
          <span className="text-[10px] text-muted-foreground">Income</span>
        </div>
        <p className="text-sm font-semibold text-foreground">₹1,00,000</p>
      </div>
      <div className="bg-card/60 border border-border/50 rounded-xl p-3">
        <div className="flex items-center gap-2 mb-1">
          <ArrowUpRight className="w-3 h-3 text-destructive" />
          <span className="text-[10px] text-muted-foreground">Expenses</span>
        </div>
        <p className="text-sm font-semibold text-foreground">₹51,289</p>
      </div>
    </div>

    {/* Recent Transactions */}
    <div className="flex-1 bg-card/40 rounded-xl p-3">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold text-foreground">Recent</p>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="space-y-2">
        {[
          { name: "Salary", amount: "+₹85,000", icon: Wallet, color: "text-secondary" },
          { name: "Swiggy", amount: "-₹450", icon: CreditCard, color: "text-destructive" },
          { name: "Amazon", amount: "-₹1,499", icon: CreditCard, color: "text-destructive" },
        ].map((tx, i) => (
          <motion.div
            key={tx.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.2 }}
            className="flex items-center justify-between py-2"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-muted/50 flex items-center justify-center">
                <tx.icon className="w-3 h-3 text-muted-foreground" />
              </div>
              <span className="text-[11px] text-foreground">{tx.name}</span>
            </div>
            <span className={`text-[11px] font-medium ${tx.color}`}>{tx.amount}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const InsightsScreen = () => (
  <div className="pt-8 px-4 pb-4 h-full flex flex-col">
    {/* Header */}
    <div className="flex items-center gap-2 mb-4">
      <Sparkles className="w-5 h-5 text-primary" />
      <p className="text-sm font-semibold text-foreground">AI Insights</p>
    </div>

    {/* Main Insight Card */}
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-secondary/20 to-primary/20 border border-secondary/30 p-4 rounded-2xl mb-4"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
          <Target className="w-5 h-5 text-secondary" />
        </div>
        <div>
          <p className="text-xs font-medium text-foreground mb-1">Savings Opportunity</p>
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            You can save ₹5,000 more by switching to a better electricity plan. Tap to learn more.
          </p>
        </div>
      </div>
    </motion.div>

    {/* Spending Chart */}
    <div className="bg-card/60 border border-border/50 rounded-xl p-4 mb-4">
      <p className="text-xs font-semibold text-foreground mb-3">Monthly Spending</p>
      <div className="flex items-end justify-between h-20 gap-1">
        {[40, 65, 45, 80, 55, 70, 50].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            className={`flex-1 rounded-t-sm ${i === 3 ? 'bg-primary' : 'bg-primary/30'}`}
          />
        ))}
      </div>
      <div className="flex justify-between mt-2 text-[8px] text-muted-foreground">
        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
      </div>
    </div>

    {/* Budget Progress */}
    <div className="bg-card/60 border border-border/50 rounded-xl p-4">
      <p className="text-xs font-semibold text-foreground mb-3">Budget Progress</p>
      <div className="space-y-3">
        {[
          { name: "Food", used: 75, color: "bg-secondary" },
          { name: "Shopping", used: 45, color: "bg-primary" },
          { name: "Travel", used: 90, color: "bg-accent" },
        ].map((budget, i) => (
          <div key={budget.name} className="space-y-1">
            <div className="flex justify-between text-[10px]">
              <span className="text-muted-foreground">{budget.name}</span>
              <span className="text-foreground">{budget.used}%</span>
            </div>
            <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${budget.used}%` }}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.2 }}
                className={`h-full rounded-full ${budget.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const GoalsScreen = () => (
  <div className="pt-8 px-4 pb-4 h-full flex flex-col">
    {/* Header */}
    <div className="flex items-center gap-2 mb-4">
      <Target className="w-5 h-5 text-accent" />
      <p className="text-sm font-semibold text-foreground">Financial Goals</p>
    </div>

    {/* Goal Cards */}
    <div className="space-y-3">
      {[
        { name: "Emergency Fund", target: "₹3,00,000", current: "₹2,34,000", progress: 78, icon: "🛡️" },
        { name: "New Car", target: "₹8,00,000", current: "₹4,50,000", progress: 56, icon: "🚗" },
        { name: "Vacation", target: "₹1,50,000", current: "₹1,20,000", progress: 80, icon: "✈️" },
        { name: "Home Down Payment", target: "₹20,00,000", current: "₹5,00,000", progress: 25, icon: "🏠" },
      ].map((goal, i) => (
        <motion.div
          key={goal.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
          className="bg-card/60 border border-border/50 rounded-xl p-3"
        >
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">{goal.icon}</span>
              <div>
                <p className="text-[11px] font-medium text-foreground">{goal.name}</p>
                <p className="text-[9px] text-muted-foreground">{goal.current} / {goal.target}</p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-primary">{goal.progress}%</span>
          </div>
          <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${goal.progress}%` }}
              transition={{ duration: 1, delay: 0.8 + i * 0.15 }}
              className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
            />
          </div>
        </motion.div>
      ))}
    </div>

    {/* Add Goal Button */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="mt-4 p-3 border-2 border-dashed border-border/50 rounded-xl flex items-center justify-center gap-2 text-muted-foreground"
    >
      <span className="text-lg">+</span>
      <span className="text-[11px]">Add New Goal</span>
    </motion.div>
  </div>
);

const MobileShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 wave-bg opacity-30" />
      <motion.div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 text-sm text-muted-foreground mb-6">
            📱 Mobile Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Your Finances,</span>
            <br />
            <span className="gradient-text">Always Within Reach</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Manage your complete financial life from anywhere. Track expenses, set goals, 
            and get AI-powered insights - all from your smartphone.
          </p>
        </motion.div>

        {/* Phone Mockups */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          {/* Left Phone - Insights */}
          <PhoneFrame delay={0.2} className="lg:-translate-y-8 scale-90 lg:scale-75">
            <InsightsScreen />
          </PhoneFrame>

          {/* Center Phone - Dashboard (Featured) */}
          <PhoneFrame delay={0} className="z-10 scale-100 lg:scale-90">
            <DashboardScreen />
          </PhoneFrame>

          {/* Right Phone - Goals */}
          <PhoneFrame delay={0.4} className="lg:translate-y-8 scale-90 lg:scale-75">
            <GoalsScreen />
          </PhoneFrame>
        </div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-16"
        >
          {[
            "Real-time Sync",
            "Offline Mode",
            "Biometric Login",
            "Push Notifications",
            "Widget Support",
            "Dark Mode"
          ].map((feature, i) => (
            <motion.span
              key={feature}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + i * 0.1 }}
              className="px-4 py-2 bg-card/50 border border-border/50 rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors cursor-default"
            >
              {feature}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MobileShowcase;
