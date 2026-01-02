import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

const services = [
  { name: "Web Application", status: "operational", uptime: "99.99%" },
  { name: "Mobile App (iOS)", status: "operational", uptime: "99.98%" },
  { name: "Mobile App (Android)", status: "operational", uptime: "99.97%" },
  { name: "API Services", status: "operational", uptime: "99.99%" },
  { name: "Bank Connections", status: "operational", uptime: "99.95%" },
  { name: "AI Insights Engine", status: "operational", uptime: "99.90%" },
];

const incidents = [
  {
    date: "December 28, 2024",
    title: "Scheduled Maintenance Completed",
    description: "Database optimization completed successfully with no downtime.",
    status: "resolved",
  },
  {
    date: "December 15, 2024",
    title: "Minor API Latency",
    description: "Some users experienced slower response times. Issue resolved within 30 minutes.",
    status: "resolved",
  },
];

const Status = () => {
  return (
    <>
      <Helmet>
        <title>System Status | FINIORAA</title>
        <meta name="description" content="FINIORAA System Status - Check the current status of all our services." />
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <CheckCircle className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">All Systems Operational</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                System <span className="gradient-text">Status</span>
              </h1>
              <p className="text-muted-foreground">
                Current status and uptime of FINIORAA services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-card border border-border"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="font-medium">{service.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{service.uptime} uptime</span>
                    <span className="px-2 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                      Operational
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Uptime Graph Placeholder */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-2xl font-bold mb-6">90-Day Uptime</h2>
              <div className="flex gap-1">
                {Array.from({ length: 90 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-8 rounded-sm bg-secondary"
                    title="100% uptime"
                  />
                ))}
              </div>
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>90 days ago</span>
                <span>Today</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Recent Incidents</h2>
              <div className="space-y-6">
                {incidents.map((incident, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-card border border-border"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold">{incident.title}</h3>
                      <span className="px-2 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                        Resolved
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">{incident.description}</p>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {incident.date}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Status;
