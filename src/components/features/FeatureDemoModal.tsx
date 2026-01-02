import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Wallet, 
  PieChart, 
  TrendingUp, 
  CreditCard, 
  Shield, 
  Brain,
  Sparkles,
  Target,
  Zap,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  CheckCircle2,
  Calendar,
  Receipt,
  Tags,
  PiggyBank,
  Building2,
  Coins,
  AlertTriangle,
  Clock,
  FileText,
  Search as SearchIcon,
  Award,
  Lightbulb,
  TrendingDown
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface FeatureDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureType: 'expense' | 'budget' | 'investment' | 'bill' | 'insurance' | 'ai' | 'predictions' | 'auto-actions' | 'analytics' | 'goals';
}

// Animated Counter Component
const AnimatedCounter = ({ value, prefix = "₹", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1500, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value]);

  return <span>{prefix}{count.toLocaleString('en-IN')}{suffix}</span>;
};

// Animated Progress Bar
const AnimatedProgress = ({ value, color, delay = 0 }: { value: number; color: string; delay?: number }) => (
  <div className="h-2 rounded-full bg-muted overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${value}%` }}
      transition={{ duration: 1, delay }}
      className={`h-full rounded-full ${color}`}
    />
  </div>
);

// Animated Line Chart
const MiniLineChart = () => {
  const data = [30, 45, 35, 55, 48, 62, 58, 72, 65, 80, 75, 88];
  const maxValue = Math.max(...data);
  
  const pathData = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - (value / maxValue) * 80;
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  return (
    <svg viewBox="0 0 100 100" className="w-full h-24" preserveAspectRatio="none">
      <defs>
        <linearGradient id="miniGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={`${pathData} L 100 100 L 0 100 Z`}
        fill="url(#miniGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.path
        d={pathData}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
    </svg>
  );
};

// Insurance Comparison Component
const InsuranceComparison = () => {
  const insurances = [
    { name: "Star Health", premium: 18000, coverage: 500000, rating: 4.5, features: ["No Room Rent Limit", "Day 1 Coverage", "4500+ Hospitals"] },
    { name: "HDFC Ergo", premium: 15500, coverage: 500000, rating: 4.2, features: ["Wellness Benefits", "Restore Benefit", "3800+ Hospitals"] },
    { name: "Care Health", premium: 14200, coverage: 500000, rating: 4.3, features: ["Unlimited Restore", "No Claim Bonus", "4000+ Hospitals"] },
  ];

  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold flex items-center gap-2">
          <SearchIcon className="w-4 h-4 text-secondary" />
          Compare & Save
        </h4>
        <span className="text-xs text-muted-foreground">Based on your profile</span>
      </div>
      
      {insurances.map((ins, index) => (
        <motion.div
          key={ins.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
          onClick={() => setSelectedPlan(index)}
          className={`p-4 rounded-xl border cursor-pointer transition-all ${
            selectedPlan === index 
              ? 'border-secondary bg-secondary/10' 
              : 'border-border bg-card hover:border-secondary/50'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h5 className="font-medium">{ins.name}</h5>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xs ${i < Math.floor(ins.rating) ? 'text-amber-500' : 'text-muted'}`}>★</span>
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">{ins.rating}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold">₹{ins.premium.toLocaleString('en-IN')}<span className="text-xs text-muted-foreground">/yr</span></div>
              <div className="text-xs text-muted-foreground">₹{(ins.coverage / 100000).toFixed(0)}L coverage</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {ins.features.map((feature, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                {feature}
              </span>
            ))}
          </div>
          
          {selectedPlan === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-3 pt-3 border-t border-border/50"
            >
              <div className="flex items-center gap-2 text-sm text-secondary">
                <CheckCircle2 className="w-4 h-4" />
                <span>Save ₹{(18000 - ins.premium).toLocaleString('en-IN')}/year compared to your current plan</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
      
      <Button className="w-full bg-secondary hover:bg-secondary/90">
        <Award className="w-4 h-4 mr-2" />
        Get Best Quote
      </Button>
    </div>
  );
};

const FeatureDemoModal = ({ isOpen, onClose, featureType }: FeatureDemoModalProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [animationTrigger, setAnimationTrigger] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setAnimationTrigger(prev => prev + 1);
    }
  }, [isOpen]);

  const getFeatureContent = () => {
    switch (featureType) {
      case 'expense':
        return {
          title: "Expense Tracking",
          icon: Wallet,
          gradient: "from-primary to-blue-500",
          tabs: ["Live Tracking", "Categories", "Insights"],
          content: [
            // Live Tracking Tab
            <div key="tracking" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-destructive/10 border border-destructive/30"
                >
                  <p className="text-xs text-muted-foreground mb-1">Today's Spending</p>
                  <p className="text-2xl font-bold text-destructive"><AnimatedCounter value={2450} /></p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-4 rounded-xl bg-secondary/10 border border-secondary/30"
                >
                  <p className="text-xs text-muted-foreground mb-1">This Week</p>
                  <p className="text-2xl font-bold text-secondary"><AnimatedCounter value={18750} /></p>
                </motion.div>
              </div>
              
              <div className="space-y-3">
                {[
                  { name: "Swiggy Order", category: "Food", amount: 450, time: "2 min ago", icon: "🍔" },
                  { name: "Amazon Shopping", category: "Shopping", amount: 1299, time: "1 hr ago", icon: "🛍️" },
                  { name: "Uber Ride", category: "Transport", amount: 189, time: "3 hrs ago", icon: "🚗" },
                ].map((tx, i) => (
                  <motion.div
                    key={tx.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{tx.icon}</span>
                      <div>
                        <p className="font-medium text-sm">{tx.name}</p>
                        <p className="text-xs text-muted-foreground">{tx.category} • {tx.time}</p>
                      </div>
                    </div>
                    <span className="text-destructive font-semibold">-₹{tx.amount}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-3 rounded-xl bg-primary/10 border border-primary/30"
              >
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-primary" />
                  <span className="text-sm">New SMS detected: SBI debit of ₹1,299 at Amazon</span>
                </div>
              </motion.div>
            </div>,
            // Categories Tab
            <div key="categories" className="space-y-4">
              {[
                { name: "Food & Dining", amount: 12500, percent: 35, color: "bg-orange-500" },
                { name: "Shopping", amount: 8500, percent: 24, color: "bg-pink-500" },
                { name: "Transport", amount: 5200, percent: 15, color: "bg-blue-500" },
                { name: "Entertainment", amount: 4800, percent: 14, color: "bg-purple-500" },
                { name: "Utilities", amount: 4200, percent: 12, color: "bg-teal-500" },
              ].map((cat, i) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${cat.color}`} />
                      <span className="text-sm font-medium">{cat.name}</span>
                    </div>
                    <span className="text-sm">₹{cat.amount.toLocaleString('en-IN')}</span>
                  </div>
                  <AnimatedProgress value={cat.percent} color={cat.color} delay={i * 0.1} />
                </motion.div>
              ))}
            </div>,
            // Insights Tab
            <div key="insights" className="space-y-4">
              <MiniLineChart />
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-xl bg-card border border-border"
                >
                  <TrendingDown className="w-5 h-5 text-secondary mb-2" />
                  <p className="text-xs text-muted-foreground">vs Last Month</p>
                  <p className="font-bold text-secondary">-12% spending</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="p-4 rounded-xl bg-card border border-border"
                >
                  <Tags className="w-5 h-5 text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Top Category</p>
                  <p className="font-bold">Food & Dining</p>
                </motion.div>
              </div>
            </div>
          ]
        };
      
      case 'budget':
        return {
          title: "Budget Planning",
          icon: PieChart,
          gradient: "from-emerald-500 to-teal-500",
          tabs: ["Budgets", "Progress", "Alerts"],
          content: [
            <div key="budgets" className="space-y-4">
              {[
                { name: "Food & Dining", spent: 12500, limit: 15000, color: "bg-orange-500" },
                { name: "Entertainment", spent: 3800, limit: 3000, color: "bg-purple-500", over: true },
                { name: "Shopping", spent: 6500, limit: 10000, color: "bg-pink-500" },
              ].map((b, i) => (
                <motion.div
                  key={b.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-4 rounded-xl border ${b.over ? 'border-destructive/50 bg-destructive/5' : 'border-border bg-card'}`}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{b.name}</span>
                    <span className={b.over ? 'text-destructive font-semibold' : ''}>
                      ₹{b.spent.toLocaleString('en-IN')} / ₹{b.limit.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <AnimatedProgress 
                    value={Math.min((b.spent / b.limit) * 100, 100)} 
                    color={b.over ? 'bg-destructive' : b.color} 
                    delay={i * 0.1} 
                  />
                  {b.over && (
                    <p className="text-xs text-destructive mt-2 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Over budget by ₹{(b.spent - b.limit).toLocaleString('en-IN')}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>,
            <div key="progress" className="text-center py-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-32 h-32 rounded-full border-8 border-secondary/20 mx-auto relative"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 270 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0 rounded-full border-8 border-secondary border-r-transparent"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    <p className="text-3xl font-bold">75%</p>
                    <p className="text-xs text-muted-foreground">Used</p>
                  </div>
                </div>
              </motion.div>
              <p className="mt-4 text-muted-foreground">₹35,200 of ₹47,000 spent</p>
            </div>,
            <div key="alerts" className="space-y-3">
              {[
                { type: "warning", message: "Entertainment budget 127% used", icon: AlertTriangle, color: "text-amber-500 bg-amber-500/10" },
                { type: "info", message: "Food budget at 83% - slow down!", icon: Bell, color: "text-blue-500 bg-blue-500/10" },
                { type: "success", message: "Shopping budget on track", icon: CheckCircle2, color: "text-emerald-500 bg-emerald-500/10" },
              ].map((alert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className={`p-3 rounded-xl flex items-center gap-3 ${alert.color}`}
                >
                  <alert.icon className="w-5 h-5" />
                  <span className="text-sm">{alert.message}</span>
                </motion.div>
              ))}
            </div>
          ]
        };

      case 'investment':
        return {
          title: "Investment Tracking",
          icon: TrendingUp,
          gradient: "from-blue-500 to-indigo-500",
          tabs: ["Portfolio", "Performance", "Holdings"],
          content: [
            <div key="portfolio" className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30"
              >
                <p className="text-xs text-muted-foreground mb-1">Total Portfolio Value</p>
                <p className="text-3xl font-bold gradient-text"><AnimatedCounter value={1245000} /></p>
                <div className="flex items-center gap-2 mt-2 text-sm text-secondary">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+₹145,000 (12.5%) this year</span>
                </div>
              </motion.div>
              <MiniLineChart />
            </div>,
            <div key="performance" className="grid grid-cols-2 gap-3">
              {[
                { label: "1D", value: "+0.8%", positive: true },
                { label: "1W", value: "+2.3%", positive: true },
                { label: "1M", value: "-1.2%", positive: false },
                { label: "1Y", value: "+14.5%", positive: true },
              ].map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-card border border-border text-center"
                >
                  <p className="text-xs text-muted-foreground mb-1">{p.label}</p>
                  <p className={`text-xl font-bold ${p.positive ? 'text-secondary' : 'text-destructive'}`}>
                    {p.value}
                  </p>
                </motion.div>
              ))}
            </div>,
            <div key="holdings" className="space-y-3">
              {[
                { name: "Stocks", value: 450000, change: 12.5, icon: TrendingUp, color: "text-emerald-500" },
                { name: "Mutual Funds", value: 320000, change: 8.2, icon: PieChart, color: "text-blue-500" },
                { name: "Gold", value: 150000, change: -2.1, icon: Coins, color: "text-amber-500" },
              ].map((h, i) => (
                <motion.div
                  key={h.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-muted/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center">
                      <h.icon className={`w-5 h-5 ${h.color}`} />
                    </div>
                    <span className="font-medium">{h.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">₹{(h.value / 1000).toFixed(0)}K</p>
                    <p className={`text-xs flex items-center gap-1 ${h.change >= 0 ? 'text-secondary' : 'text-destructive'}`}>
                      {h.change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {h.change}%
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ]
        };

      case 'bill':
        return {
          title: "Bill Management",
          icon: CreditCard,
          gradient: "from-purple-500 to-pink-500",
          tabs: ["Upcoming", "Calendar", "Auto-Pay"],
          content: [
            <div key="upcoming" className="space-y-3">
              {[
                { name: "HDFC Credit Card", amount: 45000, due: "Jan 5", status: "overdue", icon: CreditCard },
                { name: "Electricity Bill", amount: 2450, due: "Jan 15", status: "upcoming", icon: Zap },
                { name: "Internet", amount: 999, due: "Jan 18", status: "upcoming", icon: Building2 },
              ].map((bill, i) => (
                <motion.div
                  key={bill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-4 rounded-xl border ${
                    bill.status === 'overdue' ? 'border-destructive/50 bg-destructive/5' : 'border-border bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        bill.status === 'overdue' ? 'bg-destructive/10' : 'bg-muted'
                      }`}>
                        <bill.icon className={`w-5 h-5 ${bill.status === 'overdue' ? 'text-destructive' : 'text-muted-foreground'}`} />
                      </div>
                      <div>
                        <p className="font-medium">{bill.name}</p>
                        <p className="text-xs text-muted-foreground">Due: {bill.due}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{bill.amount.toLocaleString('en-IN')}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        bill.status === 'overdue' ? 'bg-destructive/10 text-destructive' : 'bg-amber-500/10 text-amber-500'
                      }`}>
                        {bill.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>,
            <div key="calendar" className="text-center py-4">
              <div className="grid grid-cols-7 gap-1 text-xs text-muted-foreground mb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <span key={d}>{d}</span>)}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 31 }, (_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.02 }}
                    className={`aspect-square rounded-lg flex items-center justify-center text-xs ${
                      [5, 15, 18, 25].includes(i + 1) 
                        ? 'bg-primary text-primary-foreground font-bold' 
                        : 'bg-muted/30 hover:bg-muted/50'
                    }`}
                  >
                    {i + 1}
                  </motion.div>
                ))}
              </div>
            </div>,
            <div key="autopay" className="space-y-3">
              {[
                { name: "Netflix", amount: 649, enabled: true },
                { name: "Spotify", amount: 119, enabled: true },
                { name: "Internet", amount: 999, enabled: false },
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-muted/30"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${item.enabled ? 'bg-secondary/20' : 'bg-muted'} flex items-center justify-center`}>
                      {item.enabled ? <CheckCircle2 className="w-4 h-4 text-secondary" /> : <Clock className="w-4 h-4 text-muted-foreground" />}
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <span className="text-muted-foreground">₹{item.amount}/mo</span>
                </motion.div>
              ))}
            </div>
          ]
        };

      case 'insurance':
        return {
          title: "Insurance Tracker",
          icon: Shield,
          gradient: "from-amber-500 to-orange-500",
          tabs: ["My Policies", "Compare", "Claims"],
          content: [
            <div key="policies" className="space-y-3">
              {[
                { name: "Term Life Insurance", provider: "LIC", coverage: "₹1Cr", premium: 12500, status: "active" },
                { name: "Health Insurance", provider: "Star Health", coverage: "₹5L", premium: 18000, status: "active" },
                { name: "Car Insurance", provider: "ICICI Lombard", coverage: "₹6L", premium: 8500, status: "expiring" },
              ].map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-4 rounded-xl border ${
                    p.status === 'expiring' ? 'border-amber-500/50 bg-amber-500/5' : 'border-border bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        p.status === 'expiring' ? 'bg-amber-500/10' : 'bg-emerald-500/10'
                      }`}>
                        {p.status === 'expiring' ? (
                          <Calendar className="w-5 h-5 text-amber-500" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{p.name}</p>
                        <p className="text-xs text-muted-foreground">{p.provider} • {p.coverage}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{p.premium.toLocaleString('en-IN')}/yr</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>,
            // Insurance Comparison Tab
            <InsuranceComparison key="compare" />,
            <div key="claims" className="space-y-4">
              <div className="text-center py-6">
                <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <h4 className="font-semibold mb-1">No Active Claims</h4>
                <p className="text-sm text-muted-foreground">Your claim history will appear here</p>
              </div>
              <Button variant="outline" className="w-full">
                <FileText className="w-4 h-4 mr-2" />
                File a New Claim
              </Button>
            </div>
          ]
        };

      case 'ai':
        return {
          title: "AI Insights",
          icon: Brain,
          gradient: "from-secondary to-purple-500",
          tabs: ["Insights", "Recommendations", "Predictions"],
          content: [
            <div key="insights" className="space-y-3">
              {[
                { type: "saving", title: "Save ₹4,500/month", desc: "Reduce dining out by 20%", icon: PiggyBank, color: "text-emerald-500" },
                { type: "alert", title: "Subscription overlap", desc: "Both Spotify & YouTube Premium", icon: Lightbulb, color: "text-amber-500" },
                { type: "goal", title: "Emergency fund 80%", desc: "₹2.4L of ₹3L achieved", icon: Target, color: "text-blue-500" },
              ].map((insight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="p-4 rounded-xl bg-card border border-border hover:border-secondary/30 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <insight.icon className={`w-5 h-5 ${insight.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{insight.title}</h4>
                      <p className="text-sm text-muted-foreground">{insight.desc}</p>
                    </div>
                    <Sparkles className="w-4 h-4 text-secondary" />
                  </div>
                </motion.div>
              ))}
            </div>,
            <div key="recommendations" className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-secondary/10 border border-secondary/30"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-secondary">AI Recommendation</span>
                </div>
                <p className="text-sm">Based on your spending patterns, you could save ₹8,500 more this month by:</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Reducing food delivery orders by 3x/week</li>
                  <li>• Canceling unused Spotify subscription</li>
                  <li>• Switching to annual gym membership</li>
                </ul>
              </motion.div>
            </div>,
            <div key="predictions" className="space-y-4">
              <h4 className="font-semibold">Cash Flow Forecast</h4>
              <MiniLineChart />
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-card border border-border text-center">
                  <p className="text-xs text-muted-foreground">End of Month</p>
                  <p className="text-xl font-bold text-secondary">₹45,000</p>
                </div>
                <div className="p-3 rounded-xl bg-card border border-border text-center">
                  <p className="text-xs text-muted-foreground">Prediction Accuracy</p>
                  <p className="text-xl font-bold">92%</p>
                </div>
              </div>
            </div>
          ]
        };

      case 'predictions':
        return {
          title: "Smart Predictions",
          icon: Sparkles,
          gradient: "from-violet-500 to-purple-500",
          tabs: ["Forecast", "Trends", "Alerts"],
          content: [
            <div key="forecast" className="space-y-4">
              <MiniLineChart />
              {["Jan 15", "Jan 31", "Feb 15", "Feb 28"].map((date, i) => (
                <motion.div
                  key={date}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-muted/30"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <span>{date}</span>
                  </div>
                  <span className="text-secondary font-semibold">₹{(45000 + i * 12000).toLocaleString('en-IN')}</span>
                </motion.div>
              ))}
            </div>,
            <div key="trends" className="space-y-4">
              <div className="text-center py-4">
                <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold">Spending Trends</h4>
                <p className="text-sm text-muted-foreground">Your spending is 12% lower than last month</p>
              </div>
            </div>,
            <div key="alerts" className="space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30"
              >
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  <div>
                    <p className="font-medium text-amber-500">Upcoming Expense</p>
                    <p className="text-sm text-muted-foreground">Car insurance renewal ₹8,500 due in 18 days</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ]
        };

      case 'auto-actions':
        return {
          title: "Auto-Actions",
          icon: Zap,
          gradient: "from-amber-500 to-orange-500",
          tabs: ["Active", "Create", "History"],
          content: [
            <div key="active" className="space-y-3">
              {[
                { name: "Auto-save 10% of salary", saved: "₹7,500/mo" },
                { name: "Round-up to investments", saved: "₹1,200/mo" },
                { name: "Auto-pay credit card", saved: "₹0 late fees" },
              ].map((action, i) => (
                <motion.div
                  key={action.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-card border border-border"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="font-medium">{action.name}</span>
                  </div>
                  <span className="text-secondary font-semibold">{action.saved}</span>
                </motion.div>
              ))}
            </div>,
            <div key="create" className="text-center py-6">
              <Zap className="w-12 h-12 text-amber-500 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Create New Automation</h4>
              <p className="text-sm text-muted-foreground mb-4">Set up rules to automate your finances</p>
              <Button className="bg-amber-500 hover:bg-amber-600">
                <Zap className="w-4 h-4 mr-2" />
                Create Rule
              </Button>
            </div>,
            <div key="history" className="space-y-3">
              <p className="text-xs text-muted-foreground mb-2">Recent Actions</p>
              {[
                { action: "Saved ₹7,500 to Emergency Fund", time: "2 days ago" },
                { action: "Invested ₹1,200 via round-up", time: "5 days ago" },
                { action: "Paid HDFC credit card ₹45,000", time: "1 week ago" },
              ].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-muted/30"
                >
                  <span className="text-sm">{h.action}</span>
                  <span className="text-xs text-muted-foreground">{h.time}</span>
                </motion.div>
              ))}
            </div>
          ]
        };

      case 'analytics':
        return {
          title: "Spending Analytics",
          icon: BarChart3,
          gradient: "from-pink-500 to-rose-500",
          tabs: ["Overview", "Categories", "Trends"],
          content: [
            <div key="overview" className="space-y-4">
              <MiniLineChart />
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-xl bg-card border border-border text-center"
                >
                  <p className="text-xs text-muted-foreground">Total Spending</p>
                  <p className="text-2xl font-bold"><AnimatedCounter value={51289} /></p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="p-4 rounded-xl bg-card border border-border text-center"
                >
                  <p className="text-xs text-muted-foreground">vs Last Month</p>
                  <p className="text-2xl font-bold text-secondary">-8.2%</p>
                </motion.div>
              </div>
            </div>,
            <div key="categories" className="space-y-3">
              {[
                { name: "Food & Dining", percent: 30, color: "bg-orange-500" },
                { name: "Shopping", percent: 24, color: "bg-pink-500" },
                { name: "Transport", percent: 16, color: "bg-blue-500" },
                { name: "Entertainment", percent: 15, color: "bg-purple-500" },
                { name: "Utilities", percent: 15, color: "bg-teal-500" },
              ].map((cat, i) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex justify-between mb-1 text-sm">
                    <span>{cat.name}</span>
                    <span>{cat.percent}%</span>
                  </div>
                  <AnimatedProgress value={cat.percent} color={cat.color} delay={i * 0.1} />
                </motion.div>
              ))}
            </div>,
            <div key="trends" className="py-4">
              <MiniLineChart />
              <div className="mt-4 p-3 rounded-xl bg-secondary/10 border border-secondary/30">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  <span className="text-sm">Your spending decreased 12% this quarter</span>
                </div>
              </div>
            </div>
          ]
        };

      case 'goals':
        return {
          title: "Goal Optimization",
          icon: Target,
          gradient: "from-emerald-500 to-teal-500",
          tabs: ["Goals", "Progress", "AI Tips"],
          content: [
            <div key="goals" className="space-y-4">
              {[
                { name: "Emergency Fund", current: 180000, target: 300000, color: "bg-emerald-500" },
                { name: "Vacation", current: 45000, target: 100000, color: "bg-blue-500" },
                { name: "New Car", current: 250000, target: 800000, color: "bg-purple-500" },
              ].map((goal, i) => (
                <motion.div
                  key={goal.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-card border border-border"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{goal.name}</span>
                    <span className="text-muted-foreground">{Math.round((goal.current / goal.target) * 100)}%</span>
                  </div>
                  <AnimatedProgress value={(goal.current / goal.target) * 100} color={goal.color} delay={i * 0.1} />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>₹{goal.current.toLocaleString('en-IN')}</span>
                    <span>₹{goal.target.toLocaleString('en-IN')}</span>
                  </div>
                </motion.div>
              ))}
            </div>,
            <div key="progress" className="text-center py-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-32 h-32 rounded-full border-8 border-secondary mx-auto relative"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    <p className="text-3xl font-bold">78%</p>
                    <p className="text-xs text-muted-foreground">Success Rate</p>
                  </div>
                </div>
              </motion.div>
              <p className="mt-4 text-muted-foreground">You're on track for 3 out of 4 goals</p>
            </div>,
            <div key="tips" className="space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 rounded-xl bg-secondary/10 border border-secondary/30"
              >
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <p className="font-semibold text-secondary">AI Optimization</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Increase your Emergency Fund contribution by ₹2,000/month to reach your goal 2 months earlier.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ]
        };

      default:
        return {
          title: "Demo",
          icon: Sparkles,
          gradient: "from-primary to-secondary",
          tabs: ["Tab 1"],
          content: [<div key="default">Demo content</div>]
        };
    }
  };

  const feature = getFeatureContent();
  const Icon = feature.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-[95vw] max-h-[85vh] p-0 bg-card/95 backdrop-blur-xl border-border/50 overflow-hidden">
        <DialogTitle className="sr-only">{feature.title} Demo</DialogTitle>
        
        <div className="flex flex-col h-full max-h-[85vh]">
          {/* Header */}
          <div className={`px-6 py-4 bg-gradient-to-r ${feature.gradient} text-white`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">{feature.title}</h2>
                  <p className="text-sm opacity-80">Interactive Demo</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 px-4 py-2 border-b border-border/50 bg-muted/20 overflow-x-auto">
            {feature.tabs.map((tab, index) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${featureType}-${activeTab}-${animationTrigger}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {feature.content[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-border/50 bg-muted/20">
            <Button onClick={onClose} className="w-full" variant="outline">
              Close Demo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeatureDemoModal;
