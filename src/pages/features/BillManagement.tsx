import { motion } from "framer-motion";
import { 
  CreditCard, 
  Bell, 
  Calendar, 
  CheckCircle2,
  AlertTriangle,
  Clock,
  Zap,
  RefreshCw
} from "lucide-react";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";

const BillManagement = () => {
  const upcomingBills = [
    { name: "Electricity Bill", amount: 2450, dueDate: "Jan 15", status: "upcoming", provider: "BESCOM" },
    { name: "Internet", amount: 999, dueDate: "Jan 18", status: "upcoming", provider: "Airtel" },
    { name: "Credit Card", amount: 45000, dueDate: "Jan 5", status: "overdue", provider: "HDFC" },
    { name: "Phone Bill", amount: 599, dueDate: "Jan 22", status: "upcoming", provider: "Jio" },
    { name: "Netflix", amount: 649, dueDate: "Jan 25", status: "scheduled", provider: "Netflix" },
  ];

  const features = [
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Get timely notifications before due dates. Multiple reminders ensure you never miss a payment."
    },
    {
      icon: Zap,
      title: "One-Click Payments",
      description: "Pay all your bills directly from FINIORAA. Integrated with all major billers and payment gateways."
    },
    {
      icon: RefreshCw,
      title: "Auto-Pay Setup",
      description: "Set up autopay for recurring bills. We'll handle payments while you focus on what matters."
    },
    {
      icon: Calendar,
      title: "Bill Calendar",
      description: "Visual calendar showing all upcoming payments. Plan your cash flow with complete visibility."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'overdue': return 'text-red-500 bg-red-500/10';
      case 'scheduled': return 'text-emerald-500 bg-emerald-500/10';
      default: return 'text-amber-500 bg-amber-500/10';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'overdue': return AlertTriangle;
      case 'scheduled': return CheckCircle2;
      default: return Clock;
    }
  };

  return (
    <FeaturePageLayout
      title="Bill Management"
      subtitle="Platform"
      description="Never miss a payment again. Track all your bills, get smart reminders, and pay everything from one place. Say goodbye to late fees forever."
      icon={<CreditCard className="w-4 h-4 text-primary" />}
      gradient="from-purple-500 to-pink-500"
      demoType="bill"
      stats={[
        { label: "Bills Tracked", value: "10M+" },
        { label: "On-Time Rate", value: "99.5%" },
        { label: "Saved in Late Fees", value: "₹2Cr+" },
        { label: "Billers Supported", value: "500+" }
      ]}
    >
      {/* Bills Preview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Upcoming <span className="gradient-text">Bills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All your bills organized in one place with status tracking
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto p-6 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">January 2026</h3>
              <div className="text-sm text-muted-foreground">
                Total Due: <span className="font-semibold text-foreground">₹49,697</span>
              </div>
            </div>

            <div className="space-y-4">
              {upcomingBills.map((bill, index) => {
                const StatusIcon = getStatusIcon(bill.status);
                return (
                  <motion.div
                    key={bill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors ${bill.status === 'overdue' ? 'border border-red-500/30' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getStatusColor(bill.status)}`}>
                        <StatusIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium">{bill.name}</div>
                        <div className="text-sm text-muted-foreground">{bill.provider} • Due {bill.dueDate}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">₹{bill.amount.toLocaleString('en-IN')}</div>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(bill.status)}`}>
                        {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30"
            >
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <div>
                  <div className="font-medium text-red-500">Overdue Alert</div>
                  <div className="text-sm text-muted-foreground">
                    Your HDFC Credit Card payment is overdue. Pay now to avoid late fees.
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
                className="p-8 rounded-2xl bg-card border border-border hover:border-purple-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-500 transition-colors">
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

export default BillManagement;
