import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Target, 
  Users, 
  Lightbulb, 
  Heart, 
  Globe, 
  Award,
  Rocket,
  Shield
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Your financial data is sacred. We employ bank-grade encryption and never sell your data.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries to bring you the most advanced financial tools.",
  },
  {
    icon: Heart,
    title: "User-First",
    description: "Every feature we build starts with understanding your real financial challenges.",
  },
  {
    icon: Globe,
    title: "India-First, Global Ready",
    description: "Built for India's unique financial ecosystem while maintaining global standards.",
  },
];

const milestones = [
  { year: "2023", event: "FINIORAA founded with a vision to democratize financial management" },
  { year: "2024", event: "Launched beta with 10,000+ early adopters" },
  { year: "2024", event: "Integrated with 50+ Indian banks and financial institutions" },
  { year: "2025", event: "Expanding AI capabilities and reaching 100,000+ users" },
];

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | FINIORAA - Our Mission & Story</title>
        <meta name="description" content="Learn about FINIORAA's mission to revolutionize personal finance management in India. Meet our team and discover our values." />
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Building Financial Freedom for{" "}
                <span className="gradient-text">a Billion Indians</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                FINIORAA was born from a simple observation: managing personal finances in India 
                is unnecessarily complex. We are here to change that.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Our Mission</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Empowering Every Indian to Achieve Financial Clarity
                </h2>
                <p className="text-muted-foreground mb-4">
                  We believe that financial management should not be reserved for the wealthy or 
                  financially literate. Our mission is to provide intelligent, accessible, and 
                  secure tools that help every Indian take control of their financial future.
                </p>
                <p className="text-muted-foreground">
                  From tracking daily expenses to planning for retirement, FINIORAA serves as 
                  your complete financial operating system.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Rocket className="w-32 h-32 text-primary/50" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at FINIORAA
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 mb-8 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pt-3">
                    <p className="text-foreground">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <Users className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Our Team</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built by a Team That Understands India
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Our team combines deep expertise in fintech, AI, and Indian financial regulations 
                to build solutions that truly work for the Indian context.
              </p>
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <Award className="w-5 h-5 text-accent" />
                <span>A CROPXON Technologies Product</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutUs;
