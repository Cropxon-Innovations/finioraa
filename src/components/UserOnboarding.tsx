import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Building2, 
  CreditCard, 
  Smartphone, 
  Target, 
  PiggyBank, 
  Home, 
  Plane, 
  Car,
  GraduationCap,
  Wallet,
  Shield,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface UserOnboardingProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const banks = [
  { name: "HDFC Bank", logo: "🏦", color: "bg-blue-500" },
  { name: "SBI", logo: "🏛️", color: "bg-blue-600" },
  { name: "ICICI Bank", logo: "🏦", color: "bg-orange-500" },
  { name: "Axis Bank", logo: "🏦", color: "bg-purple-500" },
  { name: "Kotak", logo: "🏦", color: "bg-red-500" },
  { name: "Yes Bank", logo: "🏦", color: "bg-blue-400" },
];

const upiApps = [
  { name: "Google Pay", icon: "💳", connected: false },
  { name: "PhonePe", icon: "📱", connected: false },
  { name: "Paytm", icon: "💰", connected: false },
  { name: "Amazon Pay", icon: "🛒", connected: false },
];

const goalTemplates = [
  { id: "emergency", name: "Emergency Fund", icon: Shield, color: "text-emerald-500 bg-emerald-500/10", defaultAmount: 300000 },
  { id: "vacation", name: "Vacation", icon: Plane, color: "text-blue-500 bg-blue-500/10", defaultAmount: 100000 },
  { id: "car", name: "New Car", icon: Car, color: "text-purple-500 bg-purple-500/10", defaultAmount: 800000 },
  { id: "house", name: "Home Down Payment", icon: Home, color: "text-amber-500 bg-amber-500/10", defaultAmount: 2000000 },
  { id: "education", name: "Education", icon: GraduationCap, color: "text-pink-500 bg-pink-500/10", defaultAmount: 500000 },
  { id: "custom", name: "Custom Goal", icon: Target, color: "text-primary bg-primary/10", defaultAmount: 0 },
];

const UserOnboarding = ({ isOpen, onClose, onComplete }: UserOnboardingProps) => {
  const [step, setStep] = useState(1);
  const [selectedBanks, setSelectedBanks] = useState<string[]>([]);
  const [connectedUPI, setConnectedUPI] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [goalAmounts, setGoalAmounts] = useState<Record<string, number>>({});
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionComplete, setConnectionComplete] = useState(false);

  const totalSteps = 4;

  const handleBankToggle = (bankName: string) => {
    setSelectedBanks(prev => 
      prev.includes(bankName) 
        ? prev.filter(b => b !== bankName)
        : [...prev, bankName]
    );
  };

  const handleUPIToggle = (appName: string) => {
    setConnectedUPI(prev => 
      prev.includes(appName) 
        ? prev.filter(a => a !== appName)
        : [...prev, appName]
    );
  };

  const handleGoalToggle = (goalId: string) => {
    setSelectedGoals(prev => {
      if (prev.includes(goalId)) {
        const newAmounts = { ...goalAmounts };
        delete newAmounts[goalId];
        setGoalAmounts(newAmounts);
        return prev.filter(g => g !== goalId);
      }
      const goal = goalTemplates.find(g => g.id === goalId);
      if (goal) {
        setGoalAmounts(prev => ({ ...prev, [goalId]: goal.defaultAmount }));
      }
      return [...prev, goalId];
    });
  };

  const handleConnect = async () => {
    setIsConnecting(true);
    // Simulate connection
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsConnecting(false);
    setConnectionComplete(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStep(step + 1);
    setConnectionComplete(false);
  };

  const handleComplete = () => {
    onComplete();
    onClose();
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return monthlyIncome !== "";
      case 2:
        return selectedBanks.length > 0 || connectedUPI.length > 0;
      case 3:
        return selectedGoals.length > 0;
      case 4:
        return true;
      default:
        return false;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-[95vw] max-h-[90vh] p-0 bg-card/95 backdrop-blur-xl border-border/50 overflow-hidden">
        <DialogTitle className="sr-only">FINIORAA Onboarding</DialogTitle>
        
        <div className="flex flex-col h-full max-h-[90vh]">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-muted/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-bold text-lg">Welcome to FINIORAA</h2>
                <p className="text-sm text-muted-foreground">Let's set up your account</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-4 border-b border-border/30">
            <div className="flex items-center gap-2">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div key={i} className="flex-1">
                  <motion.div
                    className={`h-2 rounded-full ${i < step ? 'bg-primary' : 'bg-muted'}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round((step / totalSteps) * 100)}% complete</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <AnimatePresence mode="wait">
              {/* Step 1: Basic Info */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Wallet className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Tell us about yourself</h3>
                    <p className="text-muted-foreground">This helps us personalize your experience</p>
                  </div>

                  <div className="max-w-md mx-auto space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="income">Monthly Income (₹)</Label>
                      <Input
                        id="income"
                        type="number"
                        placeholder="e.g., 75000"
                        value={monthlyIncome}
                        onChange={(e) => setMonthlyIncome(e.target.value)}
                        className="text-lg py-6"
                      />
                      <p className="text-xs text-muted-foreground">
                        We use this to suggest personalized budgets and savings goals
                      </p>
                    </div>

                    {monthlyIncome && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-secondary/10 border border-secondary/30"
                      >
                        <div className="flex items-center gap-3">
                          <Sparkles className="w-5 h-5 text-secondary" />
                          <div>
                            <p className="text-sm font-medium text-secondary">AI Recommendation</p>
                            <p className="text-sm text-muted-foreground">
                              Based on your income, we recommend saving ₹{Math.round(parseInt(monthlyIncome) * 0.3).toLocaleString('en-IN')}/month (30%)
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Connect Accounts */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Connect Your Accounts</h3>
                    <p className="text-muted-foreground">Link your bank accounts and UPI apps for automatic tracking</p>
                  </div>

                  <div className="space-y-6">
                    {/* Bank Selection */}
                    <div>
                      <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        Bank Accounts
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {banks.map((bank) => (
                          <motion.button
                            key={bank.name}
                            onClick={() => handleBankToggle(bank.name)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`p-4 rounded-xl border transition-all ${
                              selectedBanks.includes(bank.name)
                                ? 'border-primary bg-primary/10'
                                : 'border-border bg-card hover:border-primary/50'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{bank.logo}</span>
                              <span className="text-sm font-medium">{bank.name}</span>
                              {selectedBanks.includes(bank.name) && (
                                <Check className="w-4 h-4 text-primary ml-auto" />
                              )}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* UPI Apps */}
                    <div>
                      <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                        <Smartphone className="w-4 h-4" />
                        UPI Apps
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {upiApps.map((app) => (
                          <motion.button
                            key={app.name}
                            onClick={() => handleUPIToggle(app.name)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`p-4 rounded-xl border transition-all ${
                              connectedUPI.includes(app.name)
                                ? 'border-primary bg-primary/10'
                                : 'border-border bg-card hover:border-primary/50'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{app.icon}</span>
                              <span className="text-sm font-medium">{app.name}</span>
                              {connectedUPI.includes(app.name) && (
                                <Check className="w-4 h-4 text-primary ml-auto" />
                              )}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Security Note */}
                    <div className="p-4 rounded-xl bg-muted/30 border border-border">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-emerald-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Bank-Grade Security</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Your credentials are encrypted with 256-bit AES. We're RBI compliant and never store your banking passwords.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Set Goals */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Set Your Financial Goals</h3>
                    <p className="text-muted-foreground">What are you saving for? Select all that apply</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {goalTemplates.map((goal) => (
                      <motion.button
                        key={goal.id}
                        onClick={() => handleGoalToggle(goal.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-4 rounded-xl border transition-all text-left ${
                          selectedGoals.includes(goal.id)
                            ? 'border-primary bg-primary/10'
                            : 'border-border bg-card hover:border-primary/50'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg ${goal.color} flex items-center justify-center mb-3`}>
                          <goal.icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-medium text-sm mb-1">{goal.name}</h4>
                        {selectedGoals.includes(goal.id) && goal.defaultAmount > 0 && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xs text-muted-foreground"
                          >
                            Target: ₹{(goalAmounts[goal.id] || goal.defaultAmount).toLocaleString('en-IN')}
                          </motion.p>
                        )}
                        {selectedGoals.includes(goal.id) && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-2 right-2"
                          >
                            <Check className="w-4 h-4 text-primary" />
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </div>

                  {selectedGoals.length > 0 && monthlyIncome && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-secondary/10 border border-secondary/30"
                    >
                      <div className="flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-secondary" />
                        <div>
                          <p className="text-sm font-medium text-secondary">AI Timeline</p>
                          <p className="text-sm text-muted-foreground">
                            At your current income, you could achieve your first goal in approximately {Math.round(Math.min(...selectedGoals.map(g => goalAmounts[g] || 100000)) / (parseInt(monthlyIncome) * 0.2))} months
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Step 4: Complete */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold mb-4">You're All Set!</h3>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Your FINIORAA account is ready. We'll start tracking your finances and helping you achieve your goals.
                  </p>

                  <div className="bg-card rounded-xl border border-border p-6 max-w-md mx-auto space-y-4 text-left">
                    <h4 className="font-semibold">Your Setup Summary</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Monthly Income</span>
                        <span className="font-medium">₹{parseInt(monthlyIncome || "0").toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Connected Accounts</span>
                        <span className="font-medium">{selectedBanks.length + connectedUPI.length}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Financial Goals</span>
                        <span className="font-medium">{selectedGoals.length}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Suggested Savings</span>
                        <span className="font-medium text-secondary">
                          ₹{Math.round(parseInt(monthlyIncome || "0") * 0.3).toLocaleString('en-IN')}/mo
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-border/50 bg-muted/20 flex items-center justify-between">
            {step > 1 ? (
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                disabled={isConnecting}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            ) : (
              <Button variant="ghost" onClick={onClose}>
                Skip for now
              </Button>
            )}

            {step < totalSteps ? (
              step === 2 ? (
                <Button
                  onClick={handleConnect}
                  disabled={!canProceed() || isConnecting}
                  className="bg-primary hover:bg-primary/90"
                >
                  {isConnecting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Connecting...
                    </>
                  ) : connectionComplete ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Connected!
                    </>
                  ) : (
                    <>
                      Connect & Continue
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className="bg-primary hover:bg-primary/90"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )
            ) : (
              <Button
                onClick={handleComplete}
                className="bg-secondary hover:bg-secondary/90"
              >
                Go to Dashboard
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserOnboarding;
