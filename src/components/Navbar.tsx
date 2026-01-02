import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Wallet, PieChart, TrendingUp, CreditCard, Shield, Brain, Sparkles, BarChart3, Target, Zap } from "lucide-react";

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
    { icon: Wallet, label: "Expense Tracking", description: "Auto-categorize all transactions", href: "#features" },
    { icon: PieChart, label: "Budget Planning", description: "Smart budgets that adapt to you", href: "#features" },
    { icon: TrendingUp, label: "Investment Tracking", description: "Stocks, MFs, crypto in one place", href: "#features" },
    { icon: CreditCard, label: "Bill Management", description: "Never miss a payment again", href: "#features" },
    { icon: Shield, label: "Insurance Tracker", description: "All policies, one dashboard", href: "#insurance" },
  ];

  const intelligenceFeatures = [
    { icon: Brain, label: "AI Insights", description: "Personalized financial advice", href: "#ai" },
    { icon: Sparkles, label: "Smart Predictions", description: "Forecast your cash flow", href: "#ai" },
    { icon: BarChart3, label: "Spending Analytics", description: "Deep dive into your habits", href: "#ai" },
    { icon: Target, label: "Goal Optimization", description: "Achieve goals faster with AI", href: "#ai" },
    { icon: Zap, label: "Auto-Actions", description: "Automated savings & investments", href: "#ai" },
  ];

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Security & Compliance", href: "#security" },
    { label: "India-First", href: "#india-first" },
  ];

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">F</span>
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="gradient-text">FINIORAA</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Platform Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("platform")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
              Platform
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "platform" ? "rotate-180" : ""}`} />
            </button>
            
            <AnimatePresence>
              {activeDropdown === "platform" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 pt-2 z-50"
                >
                  <div className="w-80 p-4 rounded-xl bg-card border border-border shadow-2xl shadow-black/20">
                    <div className="space-y-1">
                      {platformFeatures.map((feature) => (
                        <a
                          key={feature.label}
                          href={feature.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <feature.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-sm group-hover:text-primary transition-colors">{feature.label}</div>
                            <div className="text-xs text-muted-foreground">{feature.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Intelligence Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("intelligence")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
              Intelligence
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "intelligence" ? "rotate-180" : ""}`} />
            </button>
            
            <AnimatePresence>
              {activeDropdown === "intelligence" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 pt-2 z-50"
                >
                  <div className="w-80 p-4 rounded-xl bg-card border border-border shadow-2xl shadow-black/20">
                    <div className="space-y-1">
                      {intelligenceFeatures.map((feature) => (
                        <a
                          key={feature.label}
                          href={feature.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                            <feature.icon className="w-5 h-5 text-secondary" />
                          </div>
                          <div>
                            <div className="font-medium text-sm group-hover:text-secondary transition-colors">{feature.label}</div>
                            <div className="text-xs text-muted-foreground">{feature.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Regular Nav Links */}
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Request Access
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {/* Mobile Platform Section */}
              <div className="py-2">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Platform</div>
                {platformFeatures.map((feature) => (
                  <a
                    key={feature.label}
                    href={feature.href}
                    className="flex items-center gap-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <feature.icon className="w-4 h-4 text-primary" />
                    <span>{feature.label}</span>
                  </a>
                ))}
              </div>

              {/* Mobile Intelligence Section */}
              <div className="py-2 border-t border-border">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 mt-2">Intelligence</div>
                {intelligenceFeatures.map((feature) => (
                  <a
                    key={feature.label}
                    href={feature.href}
                    className="flex items-center gap-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <feature.icon className="w-4 h-4 text-secondary" />
                    <span>{feature.label}</span>
                  </a>
                ))}
              </div>

              {/* Mobile Regular Links */}
              <div className="py-2 border-t border-border">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="ghost" className="w-full">
                  Sign In
                </Button>
                <Button variant="hero" className="w-full">
                  Request Access
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
