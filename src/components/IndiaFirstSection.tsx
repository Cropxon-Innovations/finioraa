import { motion } from "framer-motion";
import { 
  Smartphone, 
  Fingerprint, 
  Shield, 
  Building2, 
  BadgeCheck,
  Landmark,
  CreditCard,
  Globe
} from "lucide-react";

const IndiaFirstSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "UPI Integration",
      description: "Seamless connection with all UPI apps - GPay, PhonePe, Paytm & more. Auto-track every transaction instantly.",
      stats: "500+ Banks",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Fingerprint,
      title: "Aadhaar-Linked Security",
      description: "Biometric authentication powered by UIDAI. Your identity, fully protected with India's trusted ID system.",
      stats: "1.4B+ Verified",
      gradient: "from-primary to-blue-500"
    },
    {
      icon: Shield,
      title: "RBI Compliant",
      description: "Built with strict adherence to RBI guidelines. Your data never leaves Indian servers. 100% regulatory compliance.",
      stats: "DPSC Certified",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Building2,
      title: "All Indian Banks",
      description: "Connect with 190+ Indian banks including SBI, HDFC, ICICI, Axis, Kotak & regional cooperative banks.",
      stats: "190+ Banks",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  const additionalFeatures = [
    { icon: Landmark, label: "NPCI Certified" },
    { icon: CreditCard, label: "RuPay Support" },
    { icon: BadgeCheck, label: "DigiLocker Ready" },
    { icon: Globe, label: "GSTIN Linked" }
  ];

  return (
    <section id="india-first" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      
      {/* Indian flag inspired accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-orange-500 via-background to-emerald-500 opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 via-background to-emerald-500/20 border border-border/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-sm font-medium text-muted-foreground">Made for Bharat</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">India-First</span> by Design
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built from ground up for Indian users. Deep integration with India's financial ecosystem, 
            compliant with local regulations, and optimized for how Indians manage money.
          </p>
        </motion.div>

        {/* Main features grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 h-full">
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {additionalFeatures.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-orange-500/10 via-card/50 to-emerald-500/10 border border-border/50 text-center"
        >
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-emerald-500" />
              <span className="font-medium">Data stored in India</span>
            </div>
            <span className="text-border">•</span>
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-primary" />
              <span className="font-medium">ISO 27001 Certified</span>
            </div>
            <span className="text-border">•</span>
            <div className="flex items-center gap-2">
              <Landmark className="w-6 h-6 text-orange-500" />
              <span className="font-medium">RBI Account Aggregator Framework</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndiaFirstSection;
