import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Calculator, TrendingUp, Clock, PiggyBank, IndianRupee, Sparkles } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const ROICalculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [monthlyIncome, setMonthlyIncome] = useState([50000]);
  const [monthlySpending, setMonthlySpending] = useState([35000]);

  const savings = useMemo(() => {
    const income = monthlyIncome[0];
    const spending = monthlySpending[0];
    
    // Calculate potential savings with FINIORAA
    const wastedOnSubscriptions = spending * 0.08; // 8% wasted on unused subscriptions
    const overspendingOnFood = spending * 0.12; // 12% overspending on food/delivery
    const missedCashback = spending * 0.03; // 3% missed cashback opportunities
    const impulseBuying = spending * 0.07; // 7% impulse purchases
    const betterInvestmentReturns = income * 0.02; // 2% better returns with AI suggestions
    
    const monthlySavings = wastedOnSubscriptions + overspendingOnFood + missedCashback + impulseBuying + betterInvestmentReturns;
    const yearlySavings = monthlySavings * 12;
    const hoursPerMonth = 8; // Hours saved on manual tracking
    
    return {
      monthly: Math.round(monthlySavings),
      yearly: Math.round(yearlySavings),
      hoursSaved: hoursPerMonth * 12,
      subscriptionWaste: Math.round(wastedOnSubscriptions * 12),
      foodSavings: Math.round(overspendingOnFood * 12),
      cashback: Math.round(missedCashback * 12),
    };
  }, [monthlyIncome, monthlySpending]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />
      <motion.div
        className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Calculator className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">ROI Calculator</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Calculate Your <span className="gradient-text">Potential Savings</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how much you could save by switching from manual finance tracking to FINIORAA
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-primary" />
                Your Financial Profile
              </h3>

              {/* Monthly Income Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium">Monthly Income</label>
                  <span className="text-lg font-bold text-primary">{formatCurrency(monthlyIncome[0])}</span>
                </div>
                <Slider
                  value={monthlyIncome}
                  onValueChange={setMonthlyIncome}
                  min={10000}
                  max={500000}
                  step={5000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>₹10K</span>
                  <span>₹5L</span>
                </div>
              </div>

              {/* Monthly Spending Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium">Monthly Spending</label>
                  <span className="text-lg font-bold text-secondary">{formatCurrency(monthlySpending[0])}</span>
                </div>
                <Slider
                  value={monthlySpending}
                  onValueChange={setMonthlySpending}
                  min={5000}
                  max={300000}
                  step={2500}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>₹5K</span>
                  <span>₹3L</span>
                </div>
              </div>

              {/* Current Method */}
              <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                <p className="text-sm text-muted-foreground mb-2">Without FINIORAA, you're likely:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    Paying for unused subscriptions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    Missing cashback opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    Spending hours on manual tracking
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Main Savings Card */}
              <div className="glass-card rounded-2xl p-6 md:p-8 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Your Potential Annual Savings</p>
                    <motion.p 
                      key={savings.yearly}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="text-3xl md:text-4xl font-bold gradient-text"
                    >
                      {formatCurrency(savings.yearly)}
                    </motion.p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card/50 rounded-xl p-4 text-center">
                    <PiggyBank className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Monthly</p>
                    <p className="text-lg font-bold">{formatCurrency(savings.monthly)}</p>
                  </div>
                  <div className="bg-card/50 rounded-xl p-4 text-center">
                    <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Hours Saved</p>
                    <p className="text-lg font-bold">{savings.hoursSaved}+ hrs</p>
                  </div>
                </div>
              </div>

              {/* Breakdown Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-2">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-xs text-muted-foreground">Subscription Audit</p>
                  <p className="text-lg font-bold text-accent">{formatCurrency(savings.subscriptionWaste)}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-xs text-muted-foreground">Smart Spending</p>
                  <p className="text-lg font-bold text-secondary">{formatCurrency(savings.foodSavings)}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <IndianRupee className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">Cashback Captured</p>
                  <p className="text-lg font-bold text-primary">{formatCurrency(savings.cashback)}</p>
                </motion.div>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-muted-foreground text-center">
                * Estimates based on average user spending patterns. Actual savings may vary.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
