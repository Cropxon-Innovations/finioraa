import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Book, Code, Key, Zap } from "lucide-react";

const endpoints = [
  { method: "GET", path: "/api/v1/accounts", description: "List all connected accounts" },
  { method: "GET", path: "/api/v1/transactions", description: "Retrieve transactions" },
  { method: "GET", path: "/api/v1/budgets", description: "Get budget information" },
  { method: "POST", path: "/api/v1/categories", description: "Create custom category" },
  { method: "GET", path: "/api/v1/insights", description: "Fetch AI-generated insights" },
];

const APIDocs = () => {
  return (
    <>
      <Helmet>
        <title>API Documentation | FINIORAA</title>
        <meta name="description" content="FINIORAA API Documentation - Integrate financial data into your applications." />
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
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Code className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Developer API</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Build with <span className="gradient-text">FINIORAA API</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Access financial data and insights programmatically. Build integrations, 
                dashboards, and custom applications.
              </p>
              <div className="flex gap-4">
                <Button variant="hero">
                  <Key className="w-4 h-4 mr-2" /> Get API Key
                </Button>
                <Button variant="outline">
                  <Book className="w-4 h-4 mr-2" /> View Full Docs
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
              <p className="text-muted-foreground">Make your first API call in minutes</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-background border border-border font-mono text-sm overflow-x-auto"
            >
              <pre className="text-muted-foreground">
                <code>{`curl -X GET "https://api.finioraa.com/v1/transactions" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</code>
              </pre>
            </motion.div>
          </div>
        </section>

        {/* Endpoints */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-4">Popular Endpoints</h2>
            </motion.div>

            <div className="space-y-4 max-w-3xl">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={endpoint.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    endpoint.method === "GET" ? "bg-secondary/20 text-secondary" : "bg-primary/20 text-primary"
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="font-mono text-sm flex-grow">{endpoint.path}</code>
                  <span className="text-muted-foreground text-sm hidden md:block">{endpoint.description}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Rate Limits</h3>
                <p className="text-muted-foreground text-sm">
                  1000 requests/minute on free tier. Unlimited on enterprise.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Code className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">SDKs Available</h3>
                <p className="text-muted-foreground text-sm">
                  Official SDKs for JavaScript, Python, and more coming soon.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Webhooks</h3>
                <p className="text-muted-foreground text-sm">
                  Real-time notifications for transactions and alerts.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default APIDocs;
