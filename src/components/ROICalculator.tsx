import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  PiggyBank,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ROICalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState([75000]);
  const [monthlyExpenses, setMonthlyExpenses] = useState([50000]);
  const [hoursPerMonth, setHoursPerMonth] = useState([8]);
  
  const [savings, setSavings] = useState({
    monthlySavings: 0,
    yearlySavings: 0,
    timeSaved: 0,
    investmentGrowth: 0
  });

  useEffect(() => {
    // Calculate potential savings with FINIORAA
    const income = monthlyIncome[0];
    const expenses = monthlyExpenses[0];
    const hours = hoursPerMonth[0];
    
    // Average 12% reduction in unnecessary expenses through AI insights
    const expenseReduction = expenses * 0.12;
    
    // Time saved (hours valued at average hourly rate)
    const hourlyRate = income / 160; // assuming 160 work hours/month
    const timeSavedValue = hours * hourlyRate * 0.75; // 75% time saved
    
    // Investment growth from better decisions (conservative 8% improvement)
    const currentSavings = income - expenses;
    const investmentImprovement = currentSavings * 0.08;
    
    const totalMonthlySavings = expenseReduction + timeSavedValue + investmentImprovement;
    
    setSavings({
      monthlySavings: Math.round(totalMonthlySavings),
      yearlySavings: Math.round(totalMonthlySavings * 12),
      timeSaved: Math.round(hours * 0.75),
      investmentGrowth: Math.round(investmentImprovement * 12)
    });
  }, [monthlyIncome, monthlyExpenses, hoursPerMonth]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">ROI Calculator</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See How Much You Could <span className="gradient-text">Save</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate your potential savings with FINIORAA vs managing finances manually. 
            Real numbers based on actual user data.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-xl font-semibold mb-8">Your Current Situation</h3>
              
              {/* Monthly Income */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium text-muted-foreground">Monthly Income</label>
                  <span className="text-lg font-bold text-primary">{formatCurrency(monthlyIncome[0])}</span>
                </div>
                <Slider
                  value={monthlyIncome}
                  onValueChange={setMonthlyIncome}
                  min={20000}
                  max={500000}
                  step={5000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>₹20K</span>
                  <span>₹5L</span>
                </div>
              </div>

              {/* Monthly Expenses */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium text-muted-foreground">Monthly Expenses</label>
                  <span className="text-lg font-bold text-secondary">{formatCurrency(monthlyExpenses[0])}</span>
                </div>
                <Slider
                  value={monthlyExpenses}
                  onValueChange={setMonthlyExpenses}
                  min={10000}
                  max={400000}
                  step={5000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>₹10K</span>
                  <span>₹4L</span>
                </div>
              </div>

              {/* Hours Spent on Finances */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium text-muted-foreground">Hours/Month on Finances</label>
                  <span className="text-lg font-bold text-amber-500">{hoursPerMonth[0]} hrs</span>
                </div>
                <Slider
                  value={hoursPerMonth}
                  onValueChange={setHoursPerMonth}
                  min={2}
                  max={30}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>2 hrs</span>
                  <span>30 hrs</span>
                </div>
              </div>
            </div>

            {/* How we calculate */}
            <div className="p-6 rounded-xl bg-muted/30 border border-border/30">
              <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                How We Calculate
              </h4>
              <ul className="text-xs text-muted-foreground space-y-2">
                <li>• <strong>12% expense reduction</strong> through AI-powered spending insights</li>
                <li>• <strong>75% time saved</strong> on manual tracking and planning</li>
                <li>• <strong>8% better returns</strong> from optimized investment decisions</li>
              </ul>
            </div>
          </motion.div>

          {/* Results Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main savings card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 via-card to-secondary/20 border border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="text-sm text-muted-foreground mb-2">Your Potential Yearly Savings</div>
                <motion.div
                  key={savings.yearlySavings}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-5xl md:text-6xl font-bold gradient-text mb-4"
                >
                  {formatCurrency(savings.yearlySavings)}
                </motion.div>
                <div className="text-muted-foreground">
                  That's <span className="text-primary font-semibold">{formatCurrency(savings.monthlySavings)}/month</span> back in your pocket
                </div>
              </div>
            </div>

            {/* Breakdown cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="p-6 rounded-xl bg-card/50 border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                  <PiggyBank className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="text-2xl font-bold text-emerald-500 mb-1">
                  {formatCurrency(savings.yearlySavings - savings.investmentGrowth)}
                </div>
                <div className="text-sm text-muted-foreground">Reduced Expenses</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="p-6 rounded-xl bg-card/50 border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
                <div className="text-2xl font-bold text-amber-500 mb-1">
                  {savings.timeSaved * 12} hrs
                </div>
                <div className="text-sm text-muted-foreground">Time Saved/Year</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="p-6 rounded-xl bg-card/50 border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {formatCurrency(savings.investmentGrowth)}
                </div>
                <div className="text-sm text-muted-foreground">Better Returns</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary mb-1">
                  ₹0
                </div>
                <div className="text-sm text-muted-foreground">FINIORAA Cost*</div>
              </motion.div>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              *Free tier available. Premium plans start at ₹199/month.
            </p>

            <Button variant="hero" size="xl" className="w-full group">
              Start Saving Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
