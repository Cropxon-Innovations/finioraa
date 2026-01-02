import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  CreditCard, 
  PieChart, 
  TrendingUp, 
  Shield, 
  Smartphone,
  HelpCircle,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: CreditCard,
    title: "Getting Started",
    description: "Learn the basics of FINIORAA",
    articles: 12,
  },
  {
    icon: PieChart,
    title: "Expense Tracking",
    description: "Auto-categorization and budgets",
    articles: 18,
  },
  {
    icon: TrendingUp,
    title: "Investments",
    description: "Portfolio tracking and insights",
    articles: 15,
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Account security and data protection",
    articles: 10,
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Using FINIORAA on mobile",
    articles: 8,
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Common issues and solutions",
    articles: 20,
  },
];

const popularArticles = [
  "How to connect your bank account",
  "Understanding your spending insights",
  "Setting up budget alerts",
  "Two-factor authentication setup",
  "Exporting your financial data",
];

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Helmet>
        <title>Help Center | FINIORAA</title>
        <meta name="description" content="Get help with FINIORAA. Find answers to common questions and learn how to use our features." />
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-background pt-24">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 wave-bg opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How can we <span className="gradient-text">help</span>?
              </h1>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">{category.description}</p>
                  <span className="text-xs text-muted-foreground">{category.articles} articles</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Popular Articles</h2>
            <div className="max-w-2xl">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={article}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 border-b border-border last:border-0 hover:bg-muted/50 transition-colors cursor-pointer group"
                >
                  <span className="group-hover:text-primary transition-colors">{article}</span>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
              <p className="text-muted-foreground mb-6">
                Our support team is available 24/7 to assist you.
              </p>
              <Link to="/contact" className="text-primary font-medium hover:underline">
                Contact Support →
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HelpCenter;
