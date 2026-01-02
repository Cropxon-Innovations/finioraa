import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, CreditCard, Wallet, PiggyBank, Target, Plus, Bell, Settings, Search, Calendar, PieChart, BarChart3, Sparkles, Check, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface InteractiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Animated Counter Component
const AnimatedCounter = ({ value, prefix = "₹", duration = 2 }: { value: number; prefix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <span>{prefix}{count.toLocaleString('en-IN')}</span>;
};

// Interactive Transaction Component
const InteractiveTransaction = ({ 
  name, 
  category, 
  amount, 
  type, 
  delay,
  onHover 
}: { 
  name: string; 
  category: string; 
  amount: number; 
  type: 'income' | 'expense'; 
  delay: number;
  onHover: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`flex items-center justify-between py-3 px-4 rounded-xl cursor-pointer transition-all duration-300 ${
        isHovered ? 'bg-primary/10 scale-[1.02]' : 'hover:bg-muted/30'
      }`}
      onMouseEnter={() => { setIsHovered(true); onHover(); }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3">
        <motion.div 
          animate={{ scale: isHovered ? 1.1 : 1 }}
          className={`w-10 h-10 rounded-full flex items-center justify-center ${type === 'income' ? 'bg-secondary/20' : 'bg-destructive/20'}`}
        >
          {type === 'income' ? (
            <ArrowDownRight className="w-5 h-5 text-secondary" />
          ) : (
            <ArrowUpRight className="w-5 h-5 text-destructive" />
          )}
        </motion.div>
        <div>
          <p className="text-sm font-medium text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{category}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className={`text-sm font-bold ${type === 'income' ? 'text-secondary' : 'text-destructive'}`}>
          {type === 'income' ? '+' : '-'}₹{amount.toLocaleString('en-IN')}
        </span>
        <motion.div 
          animate={{ x: isHovered ? 5 : 0, opacity: isHovered ? 1 : 0 }}
          className="text-primary"
        >
          <ChevronRight className="w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  );
};

// Animated Pie Chart Component
const AnimatedPieChart = ({ data, activeIndex, onSegmentHover }: { 
  data: { label: string; value: number; color: string }[]; 
  activeIndex: number | null;
  onSegmentHover: (index: number | null) => void;
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  return (
    <div className="relative w-48 h-48 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        {data.map((item, index) => {
          const angle = (item.value / total) * 360;
          const startAngle = currentAngle;
          currentAngle += angle;
          
          const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
          const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
          const x2 = 50 + 40 * Math.cos(((startAngle + angle) * Math.PI) / 180);
          const y2 = 50 + 40 * Math.sin(((startAngle + angle) * Math.PI) / 180);
          const largeArc = angle > 180 ? 1 : 0;

          return (
            <motion.path
              key={item.label}
              d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
              fill={item.color}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: activeIndex === null || activeIndex === index ? 1 : 0.4, 
                scale: activeIndex === index ? 1.05 : 1 
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="cursor-pointer"
              onMouseEnter={() => onSegmentHover(index)}
              onMouseLeave={() => onSegmentHover(null)}
            />
          );
        })}
      </svg>
      {/* Center Display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center bg-card/80 rounded-full p-4">
          <p className="text-xs text-muted-foreground">Total</p>
          <p className="text-sm font-bold text-foreground">₹{total.toLocaleString('en-IN')}</p>
        </div>
      </div>
    </div>
  );
};

// Animated Line Chart Component
const AnimatedLineChart = () => {
  const data = [45, 62, 48, 71, 55, 89, 76, 92, 68, 85, 78, 95];
  const maxValue = Math.max(...data);
  
  const pathData = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - (value / maxValue) * 80;
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  return (
    <div className="relative h-32 w-full">
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        {/* Grid Lines */}
        {[0, 25, 50, 75, 100].map((y) => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="hsl(var(--border))" strokeWidth="0.3" strokeDasharray="2,2" />
        ))}
        
        {/* Gradient Fill */}
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Area Fill */}
        <motion.path
          d={`${pathData} L 100 100 L 0 100 Z`}
          fill="url(#chartGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Line */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Data Points */}
        {data.map((value, index) => {
          const x = (index / (data.length - 1)) * 100;
          const y = 100 - (value / maxValue) * 80;
          return (
            <motion.circle
              key={index}
              cx={x}
              cy={y}
              r="2"
              fill="hsl(var(--primary))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="cursor-pointer hover:r-3"
            />
          );
        })}
      </svg>
    </div>
  );
};

// Bar Chart Component
const AnimatedBarChart = ({ data }: { data: { label: string; value: number; color: string }[] }) => {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="flex items-end justify-around h-32 gap-2 px-2">
      {data.map((item, index) => (
        <div key={item.label} className="flex flex-col items-center gap-2 flex-1">
          <motion.div
            className="w-full rounded-t-lg relative overflow-hidden"
            style={{ backgroundColor: item.color }}
            initial={{ height: 0 }}
            animate={{ height: `${(item.value / maxValue) * 100}%` }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            />
          </motion.div>
          <span className="text-xs text-muted-foreground truncate w-full text-center">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const InteractiveDemoModal = ({ isOpen, onClose }: InteractiveDemoModalProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'transactions' | 'analytics' | 'goals'>('overview');
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [addedTransaction, setAddedTransaction] = useState(false);

  const transactions = [
    { name: "Salary Credited", category: "Income", amount: 85000, type: 'income' as const },
    { name: "Swiggy Order", category: "Food & Dining", amount: 450, type: 'expense' as const },
    { name: "Amazon Prime", category: "Subscriptions", amount: 1499, type: 'expense' as const },
    { name: "Freelance Project", category: "Side Income", amount: 15000, type: 'income' as const },
    { name: "Electricity Bill", category: "Utilities", amount: 2340, type: 'expense' as const },
  ];

  const pieData = [
    { label: "Housing", value: 25000, color: "hsl(var(--primary))" },
    { label: "Food", value: 12500, color: "hsl(var(--secondary))" },
    { label: "Transport", value: 8000, color: "hsl(var(--accent))" },
    { label: "Entertainment", value: 5500, color: "hsl(var(--chart-4))" },
  ];

  const barData = [
    { label: "Jan", value: 45000, color: "hsl(var(--primary))" },
    { label: "Feb", value: 52000, color: "hsl(var(--primary))" },
    { label: "Mar", value: 48000, color: "hsl(var(--primary))" },
    { label: "Apr", value: 61000, color: "hsl(var(--secondary))" },
    { label: "May", value: 55000, color: "hsl(var(--primary))" },
    { label: "Jun", value: 51000, color: "hsl(var(--primary))" },
  ];

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAddTransaction = () => {
    setAddedTransaction(true);
    showNotification("✅ New transaction added: Grocery Shopping - ₹2,500");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] p-0 bg-card/95 backdrop-blur-xl border-border/50 overflow-hidden">
        <DialogTitle className="sr-only">Interactive FINIORAA Demo</DialogTitle>
        
        {/* Notification Toast */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-secondary text-secondary-foreground rounded-full text-sm font-medium shadow-lg"
            >
              {notification}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col h-full max-h-[90vh]">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-muted/20">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <span className="font-bold text-lg gradient-text">FINIORAA</span>
              </div>
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-full border border-border/50">
                <Search className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Search transactions...</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => showNotification("🔔 You have 3 new notifications")}
                className="w-10 h-10 rounded-full bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full text-[10px] text-white flex items-center justify-center">3</span>
              </motion.button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 px-6 py-3 border-b border-border/50 bg-muted/10 overflow-x-auto">
            {(['overview', 'transactions', 'analytics', 'goals'] as const).map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {/* Welcome Message */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">Good Morning, Priya 👋</h2>
                      <p className="text-muted-foreground">Here's your financial overview</p>
                    </div>
                    <Button 
                      onClick={handleAddTransaction}
                      className="bg-primary hover:bg-primary/90"
                      disabled={addedTransaction}
                    >
                      {addedTransaction ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Added
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 mr-2" />
                          Add Transaction
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { icon: Wallet, label: "Net Worth", value: 1245000, trend: "+12.5%", trendUp: true, color: "bg-primary/20 text-primary" },
                      { icon: CreditCard, label: "Monthly Spend", value: 51289, trend: "-8.2%", trendUp: false, color: "bg-destructive/20 text-destructive" },
                      { icon: PiggyBank, label: "Savings", value: 33711, trend: "+15.3%", trendUp: true, color: "bg-secondary/20 text-secondary" },
                      { icon: Target, label: "Investments", value: 485000, trend: "+22.1%", trendUp: true, color: "bg-accent/20 text-accent" },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-4 cursor-pointer"
                        onClick={() => showNotification(`📊 ${stat.label}: ₹${stat.value.toLocaleString('en-IN')}`)}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                            <stat.icon className="w-5 h-5" />
                          </div>
                          <div className={`flex items-center gap-1 text-xs ${stat.trendUp ? 'text-secondary' : 'text-destructive'}`}>
                            {stat.trendUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            {stat.trend}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-xl font-bold text-foreground">
                          <AnimatedCounter value={stat.value} duration={1.5} />
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Charts Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Spending Chart */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                          <PieChart className="w-4 h-4 text-primary" />
                          Spending Breakdown
                        </h3>
                        <span className="text-xs text-muted-foreground">December 2024</span>
                      </div>
                      <AnimatedPieChart 
                        data={pieData} 
                        activeIndex={hoveredSegment}
                        onSegmentHover={setHoveredSegment}
                      />
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        {pieData.map((item, index) => (
                          <motion.div
                            key={item.label}
                            className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors ${
                              hoveredSegment === index ? 'bg-muted/50' : 'hover:bg-muted/30'
                            }`}
                            onMouseEnter={() => setHoveredSegment(index)}
                            onMouseLeave={() => setHoveredSegment(null)}
                          >
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-xs text-muted-foreground">{item.label}</span>
                            <span className="text-xs font-medium text-foreground ml-auto">₹{item.value.toLocaleString('en-IN')}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Trend Chart */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-primary" />
                          Monthly Expenses
                        </h3>
                        <span className="text-xs text-muted-foreground">Last 6 months</span>
                      </div>
                      <AnimatedBarChart data={barData} />
                    </motion.div>
                  </div>

                  {/* AI Insight */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="p-4 bg-primary/10 border border-primary/30 rounded-xl"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary">AI Insight</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Based on your spending patterns, you could save ₹8,500 more this month by reducing dining out expenses. 
                          You're on track to reach your vacation goal by March 2025!
                        </p>
                        <Button variant="link" className="text-primary p-0 h-auto mt-2 text-sm">
                          View detailed analysis →
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === 'transactions' && (
                <motion.div
                  key="transactions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-foreground">Recent Transactions</h2>
                    <Button variant="outline" size="sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Filter by date
                    </Button>
                  </div>
                  
                  {/* New Transaction if added */}
                  <AnimatePresence>
                    {addedTransaction && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="bg-secondary/10 border border-secondary/30 rounded-xl overflow-hidden"
                      >
                        <InteractiveTransaction
                          name="Grocery Shopping"
                          category="Food & Groceries"
                          amount={2500}
                          type="expense"
                          delay={0}
                          onHover={() => {}}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl divide-y divide-border/30">
                    {transactions.map((tx, index) => (
                      <InteractiveTransaction
                        key={tx.name}
                        {...tx}
                        delay={index * 0.1}
                        onHover={() => showNotification(`💰 ${tx.name}: ${tx.type === 'income' ? '+' : '-'}₹${tx.amount.toLocaleString('en-IN')}`)}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'analytics' && (
                <motion.div
                  key="analytics"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold text-foreground">Spending Analytics</h2>
                  
                  <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-4">Net Worth Trend</h3>
                    <AnimatedLineChart />
                    <div className="flex items-center justify-between mt-4 text-sm">
                      <span className="text-muted-foreground">Jan 2024</span>
                      <span className="text-secondary font-medium">+₹3,45,000 this year</span>
                      <span className="text-muted-foreground">Dec 2024</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6">
                      <h3 className="font-semibold text-foreground mb-4">Category Distribution</h3>
                      <AnimatedPieChart 
                        data={pieData} 
                        activeIndex={hoveredSegment}
                        onSegmentHover={setHoveredSegment}
                      />
                    </div>
                    <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6">
                      <h3 className="font-semibold text-foreground mb-4">Monthly Comparison</h3>
                      <AnimatedBarChart data={barData} />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'goals' && (
                <motion.div
                  key="goals"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-foreground">Financial Goals</h2>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Goal
                    </Button>
                  </div>

                  {[
                    { name: "Emergency Fund", target: 300000, current: 245000, icon: PiggyBank, color: "primary" },
                    { name: "Vacation to Bali", target: 150000, current: 95000, icon: Target, color: "secondary" },
                    { name: "New Car", target: 800000, current: 280000, icon: CreditCard, color: "accent" },
                  ].map((goal, index) => (
                    <motion.div
                      key={goal.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.01 }}
                      className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 cursor-pointer"
                      onClick={() => showNotification(`🎯 ${goal.name}: ${Math.round((goal.current / goal.target) * 100)}% complete`)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl bg-${goal.color}/20 flex items-center justify-center`}>
                            <goal.icon className={`w-6 h-6 text-${goal.color}`} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{goal.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              ₹{goal.current.toLocaleString('en-IN')} of ₹{goal.target.toLocaleString('en-IN')}
                            </p>
                          </div>
                        </div>
                        <span className={`text-lg font-bold text-${goal.color}`}>
                          {Math.round((goal.current / goal.target) * 100)}%
                        </span>
                      </div>
                      <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-${goal.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${(goal.current / goal.target) * 100}%` }}
                          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InteractiveDemoModal;
