import { motion } from "framer-motion";
import { 
  TrendingUp, 
  PieChart, 
  BarChart3, 
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Bitcoin,
  Building2,
  Coins
} from "lucide-react";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";

const InvestmentTracking = () => {
  const portfolio = [
    { name: "Stocks", value: 450000, change: 12.5, icon: TrendingUp, color: "text-emerald-500" },
    { name: "Mutual Funds", value: 320000, change: 8.2, icon: PieChart, color: "text-blue-500" },
    { name: "Fixed Deposits", value: 200000, change: 6.5, icon: Building2, color: "text-amber-500" },
    { name: "Gold", value: 150000, change: -2.1, icon: Coins, color: "text-yellow-500" },
    { name: "Crypto", value: 80000, change: 24.8, icon: Bitcoin, color: "text-orange-500" },
  ];

  const totalValue = portfolio.reduce((sum, item) => sum + item.value, 0);
  const avgReturn = portfolio.reduce((sum, item) => sum + item.change, 0) / portfolio.length;

  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Tracking",
      description: "Live portfolio updates with current market prices. Track stocks, MFs, FDs, gold, and crypto in one place."
    },
    {
      icon: PieChart,
      title: "Asset Allocation",
      description: "Visual breakdown of your investments by asset class, sector, and risk level."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Detailed returns analysis with XIRR calculations, benchmark comparisons, and historical trends."
    },
    {
      icon: Wallet,
      title: "Dividend & Income Tracking",
      description: "Track dividends, interest income, and capital gains. Never miss a payout again."
    }
  ];

  return (
    <FeaturePageLayout
      title="Investment Tracking"
      subtitle="Platform"
      description="Your complete investment picture in one dashboard. Stocks, mutual funds, FDs, gold, crypto – track everything with real-time updates and detailed analytics."
      icon={<TrendingUp className="w-4 h-4 text-primary" />}
      gradient="from-blue-500 to-indigo-500"
      demoType="investment"
      stats={[
        { label: "Assets Tracked", value: "₹500Cr+" },
        { label: "Portfolios Managed", value: "100K+" },
        { label: "Asset Types", value: "15+" },
        { label: "Avg User Returns", value: "+14.2%" }
      ]}
    >
      {/* Portfolio Preview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Live Portfolio <span className="gradient-text">View</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See all your investments at a glance with real-time valuations
            </p>
          </motion.div>

          {/* Portfolio Summary */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30"
            >
              <div className="text-sm text-muted-foreground mb-2">Total Portfolio Value</div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2 }}
                className="text-4xl font-bold gradient-text"
              >
                ₹{(totalValue / 100000).toFixed(1)}L
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="text-sm text-muted-foreground mb-2">Overall Returns</div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-emerald-500">+{avgReturn.toFixed(1)}%</span>
                <ArrowUpRight className="w-6 h-6 text-emerald-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="text-sm text-muted-foreground mb-2">Today's P&L</div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-emerald-500">+₹12,450</span>
                <ArrowUpRight className="w-6 h-6 text-emerald-500" />
              </div>
            </motion.div>
          </div>

          {/* Holdings List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <h3 className="text-lg font-semibold mb-6">Holdings</h3>
            <div className="space-y-4">
              {portfolio.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-card flex items-center justify-center border border-border`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {((item.value / totalValue) * 100).toFixed(1)}% of portfolio
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">₹{item.value.toLocaleString('en-IN')}</div>
                    <div className={`flex items-center gap-1 text-sm ${item.change >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                      {item.change >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      {item.change >= 0 ? '+' : ''}{item.change}%
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                className="p-8 rounded-2xl bg-card border border-border hover:border-blue-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors">
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

export default InvestmentTracking;
