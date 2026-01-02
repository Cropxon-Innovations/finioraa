import { motion } from "framer-motion";
import { 
  Shield, 
  Bell, 
  FileText, 
  Search,
  CheckCircle2,
  Calendar,
  TrendingDown,
  Award
} from "lucide-react";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";

const InsuranceTracker = () => {
  const policies = [
    { 
      name: "Term Life Insurance", 
      provider: "LIC", 
      premium: 12500, 
      sumAssured: 10000000, 
      nextDue: "Mar 15, 2026",
      status: "active" 
    },
    { 
      name: "Health Insurance", 
      provider: "Star Health", 
      premium: 18000, 
      sumAssured: 500000, 
      nextDue: "Feb 1, 2026",
      status: "active" 
    },
    { 
      name: "Car Insurance", 
      provider: "ICICI Lombard", 
      premium: 8500, 
      sumAssured: 600000, 
      nextDue: "Jan 20, 2026",
      status: "expiring" 
    },
    { 
      name: "Home Insurance", 
      provider: "HDFC Ergo", 
      premium: 5000, 
      sumAssured: 5000000, 
      nextDue: "Apr 10, 2026",
      status: "active" 
    },
  ];

  const features = [
    {
      icon: FileText,
      title: "Policy Vault",
      description: "Store all policy documents securely. Access anytime from any device with bank-grade encryption."
    },
    {
      icon: Bell,
      title: "Premium Reminders",
      description: "Never miss a premium payment. Get reminders 30, 15, and 7 days before due dates."
    },
    {
      icon: Search,
      title: "Policy Comparison",
      description: "Compare your policies with market alternatives. Find better coverage at lower premiums."
    },
    {
      icon: Award,
      title: "Claim Assistance",
      description: "Step-by-step claim filing guidance. Track claim status and get expert support."
    }
  ];

  const totalPremium = policies.reduce((sum, p) => sum + p.premium, 0);
  const totalCoverage = policies.reduce((sum, p) => sum + p.sumAssured, 0);

  return (
    <FeaturePageLayout
      title="Insurance Tracker"
      subtitle="Platform"
      description="All your insurance policies in one place. Track premiums, compare options, and ensure your family is always protected with the right coverage."
      icon={<Shield className="w-4 h-4 text-primary" />}
      gradient="from-amber-500 to-orange-500"
      stats={[
        { label: "Policies Tracked", value: "500K+" },
        { label: "Coverage Protected", value: "₹1000Cr+" },
        { label: "Insurers", value: "50+" },
        { label: "Claims Processed", value: "10K+" }
      ]}
    >
      {/* Insurance Dashboard Preview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Insurance <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete visibility into all your insurance coverage and upcoming payments
            </p>
          </motion.div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30"
            >
              <div className="text-sm text-muted-foreground mb-2">Total Coverage</div>
              <div className="text-3xl font-bold gradient-text">
                ₹{(totalCoverage / 10000000).toFixed(1)}Cr
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="text-sm text-muted-foreground mb-2">Annual Premium</div>
              <div className="text-3xl font-bold">
                ₹{totalPremium.toLocaleString('en-IN')}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="text-sm text-muted-foreground mb-2">Active Policies</div>
              <div className="text-3xl font-bold text-emerald-500">
                {policies.length}
              </div>
            </motion.div>
          </div>

          {/* Policies List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <h3 className="text-lg font-semibold mb-6">Your Policies</h3>
            <div className="space-y-4">
              {policies.map((policy, index) => (
                <motion.div
                  key={policy.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors ${policy.status === 'expiring' ? 'border border-amber-500/30' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${policy.status === 'expiring' ? 'bg-amber-500/10' : 'bg-emerald-500/10'}`}>
                      {policy.status === 'expiring' ? (
                        <Calendar className="w-6 h-6 text-amber-500" />
                      ) : (
                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{policy.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {policy.provider} • ₹{(policy.sumAssured / 100000).toFixed(0)}L coverage
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">₹{policy.premium.toLocaleString('en-IN')}/yr</div>
                    <div className={`text-sm ${policy.status === 'expiring' ? 'text-amber-500' : 'text-muted-foreground'}`}>
                      Due: {policy.nextDue}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Expiring Alert */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30"
            >
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-amber-500" />
                <div>
                  <div className="font-medium text-amber-500">Renewal Alert</div>
                  <div className="text-sm text-muted-foreground">
                    Your Car Insurance expires in 18 days. Renew now to avoid coverage gap.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-amber-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </FeaturePageLayout>
  );
};

export default InsuranceTracker;
