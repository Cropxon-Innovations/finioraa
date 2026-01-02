import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const openPositions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Bangalore / Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Bangalore",
    type: "Full-time",
  },
  {
    title: "Data Scientist - AI/ML",
    department: "AI & Analytics",
    location: "Bangalore / Remote",
    type: "Full-time",
  },
  {
    title: "Financial Analyst",
    department: "Product",
    location: "Mumbai",
    type: "Full-time",
  },
  {
    title: "Customer Success Manager",
    department: "Operations",
    location: "Bangalore",
    type: "Full-time",
  },
];

const benefits = [
  "Competitive salary with equity options",
  "Flexible work arrangements",
  "Health insurance for you and family",
  "Learning & development budget",
  "Unlimited PTO policy",
  "Latest equipment and tools",
];

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers | FINIORAA - Join Our Team</title>
        <meta name="description" content="Join FINIORAA and help build the future of personal finance in India. Explore open positions and grow with us." />
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-background pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 wave-bg opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">We are Hiring</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Build the Future of{" "}
                <span className="gradient-text">Finance with Us</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Join a team of passionate individuals working to make financial management 
                accessible to every Indian.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Why Join FINIORAA?</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground">Find your next opportunity at FINIORAA</p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" className="shrink-0">
                      Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-muted-foreground mb-4">
                Do not see a role that fits? We are always looking for talented people.
              </p>
              <Link to="/contact">
                <Button variant="hero">Send Us Your Resume</Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Careers;
