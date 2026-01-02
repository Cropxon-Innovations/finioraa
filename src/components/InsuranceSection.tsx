import { motion } from "framer-motion";
import { 
  Shield, 
  Search, 
  BarChart3, 
  Bell, 
  FileText, 
  TrendingDown,
  CheckCircle2,
  ArrowRight,
  Heart,
  Car,
  Home,
  Umbrella,
  Star,
  BadgePercent
} from "lucide-react";

const insuranceTypes = [
  { icon: Heart, label: "Health", color: "text-rose-400", bg: "bg-rose-500/20" },
  { icon: Car, label: "Motor", color: "text-blue-400", bg: "bg-blue-500/20" },
  { icon: Home, label: "Home", color: "text-amber-400", bg: "bg-amber-500/20" },
  { icon: Umbrella, label: "Life", color: "text-emerald-400", bg: "bg-emerald-500/20" },
];

const flowSteps = [
  {
    step: 1,
    icon: Search,
    title: "Compare Policies",
    description: "Search across 50+ insurers to find the best coverage for your needs",
    color: "from-primary to-blue-500",
  },
  {
    step: 2,
    icon: BarChart3,
    title: "Find Best Rates",
    description: "AI analyzes premiums, coverage, and reviews to recommend optimal plans",
    color: "from-blue-500 to-accent",
  },
  {
    step: 3,
    icon: Bell,
    title: "Track & Remind",
    description: "Never miss a premium payment or renewal with smart reminders",
    color: "from-accent to-emerald-500",
  },
];

const mockPolicies = [
  { 
    type: "Health Insurance", 
    provider: "Star Health", 
    premium: "₹12,500/yr",
    coverage: "₹10 Lakh",
    renewal: "15 Mar 2025",
    status: "Active",
    rating: 4.5
  },
  { 
    type: "Term Life", 
    provider: "HDFC Life", 
    premium: "₹8,200/yr",
    coverage: "₹1 Crore",
    renewal: "22 Jun 2025",
    status: "Active",
    rating: 4.8
  },
  { 
    type: "Motor Insurance", 
    provider: "ICICI Lombard", 
    premium: "₹4,800/yr",
    coverage: "₹8 Lakh",
    renewal: "05 Feb 2025",
    status: "Renewal Due",
    rating: 4.2
  },
];

const comparisonData = [
  { insurer: "Star Health", premium: 12500, coverage: 10, claim: 95, rating: 4.5, recommended: true },
  { insurer: "HDFC Ergo", premium: 14200, coverage: 10, claim: 92, rating: 4.3, recommended: false },
  { insurer: "Max Bupa", premium: 11800, coverage: 8, claim: 89, rating: 4.1, recommended: false },
  { insurer: "Care Health", premium: 10500, coverage: 7, claim: 88, rating: 4.0, recommended: false },
];

const InsuranceSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
            Insurance Hub
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Smart Insurance <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">Management</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare, track, and optimize all your insurance policies in one place. 
            Find the best rates and never miss a premium payment.
          </p>
        </motion.div>

        {/* Insurance Type Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-16 flex-wrap"
        >
          {insuranceTypes.map((type, index) => (
            <motion.div
              key={type.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`${type.bg} p-4 rounded-2xl flex flex-col items-center gap-2 cursor-pointer border border-transparent hover:border-primary/30 transition-all`}
            >
              <type.icon className={`w-8 h-8 ${type.color}`} />
              <span className="text-sm font-medium text-foreground">{type.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* How Insurance Works - Animated Flow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            How It Works
          </h3>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-1 bg-gradient-to-r from-primary via-blue-500 to-accent rounded-full -translate-y-1/2" />
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {flowSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Step Number & Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-[2px] mb-6 relative z-10`}
                    >
                      <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                        {step.step}
                      </div>
                    </motion.div>
                    
                    <h4 className="text-xl font-bold text-foreground mb-3">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  
                  {/* Arrow for mobile */}
                  {index < flowSteps.length - 1 && (
                    <div className="flex justify-center my-4 md:hidden">
                      <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Feature Mockups Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Policy Tracker Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 p-6 overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Policy Tracker</h4>
                <p className="text-sm text-muted-foreground">All your policies in one view</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {mockPolicies.map((policy, index) => (
                <motion.div
                  key={policy.type}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background/50 rounded-xl p-4 border border-border/30 hover:border-primary/30 transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h5 className="font-semibold text-foreground text-sm">{policy.type}</h5>
                      <p className="text-xs text-muted-foreground">{policy.provider}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      policy.status === "Active" 
                        ? "bg-emerald-500/20 text-emerald-400" 
                        : "bg-amber-500/20 text-amber-400"
                    }`}>
                      {policy.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Coverage: <span className="text-foreground font-medium">{policy.coverage}</span></span>
                    <span className="text-muted-foreground">Premium: <span className="text-primary font-medium">{policy.premium}</span></span>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-xs">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Bell className="w-3 h-3" /> Renewal: {policy.renewal}
                    </span>
                    <span className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3 h-3 fill-current" /> {policy.rating}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Comparison & Best Rate Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 p-6 overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Best Rate Finder</h4>
                <p className="text-sm text-muted-foreground">Compare & save on premiums</p>
              </div>
            </div>

            {/* Search Bar Mockup */}
            <div className="bg-background/50 rounded-xl p-3 mb-4 flex items-center gap-3 border border-border/30">
              <Search className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Health Insurance, ₹10 Lakh coverage</span>
            </div>

            {/* Comparison Results */}
            <div className="space-y-2">
              {comparisonData.map((item, index) => (
                <motion.div
                  key={item.insurer}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-xl p-3 border transition-all cursor-pointer ${
                    item.recommended 
                      ? "bg-primary/10 border-primary/40" 
                      : "bg-background/50 border-border/30 hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground text-sm">{item.insurer}</span>
                      {item.recommended && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground flex items-center gap-1">
                          <BadgePercent className="w-3 h-3" /> Best Value
                        </span>
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-amber-400 text-xs">
                      <Star className="w-3 h-3 fill-current" /> {item.rating}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-muted-foreground block">Premium</span>
                      <span className="text-foreground font-medium">₹{item.premium.toLocaleString()}/yr</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block">Coverage</span>
                      <span className="text-foreground font-medium">₹{item.coverage} Lakh</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block">Claim %</span>
                      <span className="text-emerald-400 font-medium">{item.claim}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Savings Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-4 p-3 rounded-xl bg-gradient-to-r from-emerald-500/20 to-accent/20 border border-emerald-500/30 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-sm text-foreground">You could save <span className="font-bold text-emerald-400">₹3,700/year</span></span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1.5 bg-emerald-500 rounded-lg text-xs font-semibold text-white"
              >
                Apply Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Premium Reminders Feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-emerald-500/10 rounded-3xl border border-primary/20 p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center"
              >
                <Bell className="w-8 h-8 text-primary" />
              </motion.div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-1">Smart Premium Reminders</h4>
                <p className="text-muted-foreground">
                  Get notified 30, 15, and 7 days before renewal. Never let a policy lapse again.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground">
                    {30 - (i - 1) * 8}d
                  </div>
                ))}
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              <div className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm font-medium">
                ✓ Renewed
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InsuranceSection;
