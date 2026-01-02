import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Wallet, PieChart, TrendingUp, CreditCard, Shield, Brain, Sparkles, BarChart3, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedLogo from "@/components/AnimatedLogo";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const platformFeatures = [
    { icon: Wallet, label: "Expense Tracking", description: "Auto-categorize all transactions", href: "/features/expense-tracking" },
    { icon: PieChart, label: "Budget Planning", description: "Smart budgets that adapt to you", href: "/features/budget-planning" },
    { icon: TrendingUp, label: "Investment Tracking", description: "Stocks, MFs, crypto in one place", href: "/features/investment-tracking" },
    { icon: CreditCard, label: "Bill Management", description: "Never miss a payment again", href: "/features/bill-management" },
    { icon: Shield, label: "Insurance Tracker", description: "All policies, one dashboard", href: "/features/insurance-tracker" },
  ];

  const intelligenceFeatures = [
    { icon: Brain, label: "AI Insights", description: "Personalized financial advice", href: "/features/ai-insights" },
    { icon: Sparkles, label: "Smart Predictions", description: "Forecast your cash flow", href: "/features/smart-predictions" },
    { icon: BarChart3, label: "Spending Analytics", description: "Deep dive into your habits", href: "/features/spending-analytics" },
    { icon: Target, label: "Goal Optimization", description: "Achieve goals faster with AI", href: "/features/goal-optimization" },
    { icon: Zap, label: "Auto-Actions", description: "Automated savings & investments", href: "/features/auto-actions" },
  ];

  const navLinks = [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Security & Compliance", href: "/#security" },
    { label: "India-First", href: "/#india-first" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <AnimatedLogo />
          <span className="text-xl font-bold tracking-tight gradient-text">FINIORAA</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {/* Platform Dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("platform")} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="flex items-center gap-1 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Platform
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "platform" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === "platform" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-80 p-4 rounded-xl bg-card border border-border shadow-2xl">
                    {platformFeatures.map((f) => (
                      <Link key={f.label} to={f.href} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><f.icon className="w-5 h-5 text-primary" /></div>
                        <div><div className="font-medium text-sm group-hover:text-primary">{f.label}</div><div className="text-xs text-muted-foreground">{f.description}</div></div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Intelligence Dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("intelligence")} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="flex items-center gap-1 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Intelligence
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "intelligence" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === "intelligence" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-80 p-4 rounded-xl bg-card border border-border shadow-2xl">
                    {intelligenceFeatures.map((f) => (
                      <Link key={f.label} to={f.href} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center"><f.icon className="w-5 h-5 text-secondary" /></div>
                        <div><div className="font-medium text-sm group-hover:text-secondary">{f.label}</div><div className="text-xs text-muted-foreground">{f.description}</div></div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">{link.label}</a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link to="/auth">
            <Button variant="ghost" size="sm">Sign In</Button>
          </Link>
          <Link to="/auth?mode=signup">
            <Button variant="hero" size="sm">Request Access</Button>
          </Link>
        </div>

        <button className="lg:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase mb-2">Platform</div>
              {platformFeatures.map((f) => (<Link key={f.label} to={f.href} className="flex items-center gap-3 py-2" onClick={() => setIsMobileMenuOpen(false)}><f.icon className="w-4 h-4 text-primary" />{f.label}</Link>))}
              <div className="text-xs font-semibold text-muted-foreground uppercase mt-4 mb-2">Intelligence</div>
              {intelligenceFeatures.map((f) => (<Link key={f.label} to={f.href} className="flex items-center gap-3 py-2" onClick={() => setIsMobileMenuOpen(false)}><f.icon className="w-4 h-4 text-secondary" />{f.label}</Link>))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border mt-4">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
                <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full">Sign In</Button>
                </Link>
                <Link to="/auth?mode=signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="hero" className="w-full">Request Access</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
