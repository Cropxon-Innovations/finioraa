import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Check } from "lucide-react";

const GDPR = () => {
  return (
    <>
      <Helmet>
        <title>GDPR Compliance | FINIORAA</title>
        <meta name="description" content="FINIORAA GDPR Compliance - How we protect your data rights under GDPR and Indian data protection laws." />
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-background pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold">GDPR Compliance</h1>
                  <p className="text-muted-foreground">Data Protection & Privacy Rights</p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
                  <p className="text-muted-foreground">
                    FINIORAA is committed to protecting your personal data and respecting your privacy rights. 
                    We comply with the General Data Protection Regulation (GDPR) for our European users and 
                    adhere to Indian data protection standards including the Digital Personal Data Protection Act.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Your Rights Under GDPR</h2>
                  <div className="grid gap-4">
                    {[
                      { right: "Right to Access", desc: "Request a copy of your personal data" },
                      { right: "Right to Rectification", desc: "Correct inaccurate or incomplete data" },
                      { right: "Right to Erasure", desc: "Request deletion of your data" },
                      { right: "Right to Portability", desc: "Receive your data in a portable format" },
                      { right: "Right to Restrict Processing", desc: "Limit how we use your data" },
                      { right: "Right to Object", desc: "Object to certain processing activities" },
                    ].map((item) => (
                      <div key={item.right} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                        <Check className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <p className="font-medium">{item.right}</p>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Data Processing</h2>
                  <p className="text-muted-foreground">
                    We process your data based on legitimate interests (providing our services), contractual 
                    necessity, legal obligations, and your consent. You can withdraw consent at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Data Transfers</h2>
                  <p className="text-muted-foreground">
                    Your financial data is stored on servers located in India. For any international data 
                    transfers, we ensure appropriate safeguards are in place, including Standard Contractual 
                    Clauses approved by relevant authorities.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Data Protection Officer</h2>
                  <p className="text-muted-foreground">
                    For any data protection inquiries or to exercise your rights, contact our DPO at{" "}
                    <a href="mailto:dpo@finioraa.com" className="text-primary hover:underline">dpo@finioraa.com</a>
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GDPR;
