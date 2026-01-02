import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "Google India",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    quote: "FINIORAA transformed how I manage my finances. The AI insights helped me save ₹50,000 in just 3 months by identifying unnecessary subscriptions and suggesting better investment options.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Startup Founder",
    company: "TechVentures",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "As a founder, tracking personal and business finances was chaos. FINIORAA's immutable ledger and clear separation gave me peace of mind and saved hours every week.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "Doctor",
    company: "Apollo Hospitals",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "The document vault is a game-changer. All my insurance policies, tax documents, and investment proofs in one secure place. Finally, I feel in control of my financial life.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Investment Banker",
    company: "HDFC Securities",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "I've tried every finance app out there. FINIORAA is the only one that treats personal finance with the seriousness it deserves. The audit trail feature is brilliant.",
    rating: 5,
  },
  {
    name: "Meera Reddy",
    role: "CA & Tax Consultant",
    company: "Reddy & Associates",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    quote: "I recommend FINIORAA to all my clients. The expense categorization and GST tracking make tax filing so much easier. It's like having a personal CFO.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Product Manager",
    company: "Flipkart",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    quote: "The goal tracking feature kept me accountable for my house down payment savings. Seeing the progress bar fill up was incredibly motivating. Reached my goal 2 months early!",
    rating: 5,
  },
];

const companyLogos = [
  { name: "Google", logo: "G" },
  { name: "Microsoft", logo: "M" },
  { name: "Amazon", logo: "A" },
  { name: "Flipkart", logo: "F" },
  { name: "Infosys", logo: "I" },
  { name: "TCS", logo: "T" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="testimonials">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-gold bg-clip-text text-transparent">
              10,000+ Indians
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands who have transformed their financial lives with FINIORAA
          </p>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 mb-16"
        >
          <span className="text-muted-foreground text-sm">Users from:</span>
          {companyLogos.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center text-xl font-bold text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              title={company.name}
            >
              {company.logo}
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 relative group"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "10,000+", label: "Active Users" },
            { value: "₹50Cr+", label: "Tracked Monthly" },
            { value: "4.9/5", label: "App Store Rating" },
            { value: "99.9%", label: "Uptime SLA" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
