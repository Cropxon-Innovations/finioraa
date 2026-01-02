import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FileText, 
  Shield, 
  Lock, 
  FolderOpen, 
  Upload, 
  Search, 
  FileCheck, 
  Clock,
  Key,
  Fingerprint,
  CheckCircle2,
  FileImage
} from "lucide-react";

const DocumentVaultSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const documents = [
    { name: "Health Insurance Policy", type: "PDF", size: "2.4 MB", encrypted: true, icon: FileCheck },
    { name: "Car Insurance Certificate", type: "PDF", size: "1.8 MB", encrypted: true, icon: FileText },
    { name: "Term Life Policy Doc", type: "PDF", size: "3.1 MB", encrypted: true, icon: FileCheck },
    { name: "Claim Receipt - Hospital", type: "JPG", size: "856 KB", encrypted: true, icon: FileImage },
  ];

  const features = [
    {
      icon: Lock,
      title: "256-bit AES Encryption",
      description: "Military-grade encryption for all stored documents",
    },
    {
      icon: Fingerprint,
      title: "Biometric Access",
      description: "Secure access with fingerprint or Face ID",
    },
    {
      icon: Key,
      title: "Zero-Knowledge Storage",
      description: "Only you can decrypt and view your files",
    },
    {
      icon: Clock,
      title: "Version History",
      description: "Track changes and restore previous versions",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[150px]"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Document Vault</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Your <span className="gradient-text">Secure Document Vault</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Store insurance policies, claim receipts, and financial documents with bank-grade encryption. Access anytime, anywhere.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Vault Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Vault Card */}
            <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
              {/* Encryption Animation Overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20" />
              </motion.div>

              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-secondary to-primary flex items-center justify-center">
                    <FolderOpen className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Insurance Documents</h3>
                    <p className="text-xs text-muted-foreground">4 files • 8.2 MB total</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <Search className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Upload className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </div>

              {/* Document List */}
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <motion.div
                    key={doc.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center">
                      <doc.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">{doc.type} • {doc.size}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {doc.encrypted && (
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center"
                        >
                          <Lock className="w-3 h-3 text-secondary" />
                        </motion.div>
                      )}
                      <CheckCircle2 className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Encryption Status Bar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 p-4 rounded-xl bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <Shield className="w-5 h-5 text-secondary" />
                    </motion.div>
                    <span className="text-sm font-medium">End-to-End Encrypted</span>
                  </div>
                  <span className="text-xs text-muted-foreground">AES-256</span>
                </div>
                
                {/* Encryption Visualization */}
                <div className="flex items-center gap-1 overflow-hidden">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-1 flex-1 rounded-full bg-secondary/30"
                      animate={{ 
                        opacity: [0.3, 1, 0.3],
                        scaleY: [1, 1.5, 1]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Floating Security Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-4 -right-4 glass-card rounded-xl p-3 flex items-center gap-2 border border-secondary/20"
            >
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                <Fingerprint className="w-4 h-4 text-secondary" />
              </div>
              <div>
                <p className="text-xs font-medium">Biometric Protected</p>
                <p className="text-[10px] text-muted-foreground">Face ID / Fingerprint</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="glass-card rounded-xl p-5 hover:border-secondary/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Supported Documents */}
            <div className="glass-card rounded-xl p-5">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Supported Documents
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Insurance Policies", "Claim Receipts", "Tax Documents", "Investment Proofs", "Bank Statements", "Property Deeds"].map((doc) => (
                  <span 
                    key={doc}
                    className="px-3 py-1.5 rounded-full bg-muted/50 text-xs font-medium text-muted-foreground"
                  >
                    {doc}
                  </span>
                ))}
              </div>
            </div>

            {/* Security Certifications */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
              <Shield className="w-8 h-8 text-secondary" />
              <div className="flex-1">
                <p className="text-sm font-medium">ISO 27001 Certified</p>
                <p className="text-xs text-muted-foreground">Enterprise-grade security standards</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-secondary">99.9%</p>
                <p className="text-xs text-muted-foreground">Uptime</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DocumentVaultSection;
