import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | FINIORAA</title>
        <meta name="description" content="FINIORAA Privacy Policy - Learn how we collect, use, and protect your personal information." />
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
              <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
              <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground">
                    FINIORAA by CROPXON Technologies Private Limited ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                    personal finance management application and related services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                  <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Name, email address, and phone number</li>
                    <li>Date of birth and PAN (for KYC purposes)</li>
                    <li>Bank account details and transaction history</li>
                    <li>Investment portfolio information</li>
                    <li>Insurance policy details</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Financial Data</h3>
                  <p className="text-muted-foreground">
                    We collect financial data through secure APIs and account aggregation services to provide you with 
                    comprehensive financial insights. This includes transaction history, account balances, and investment holdings.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>To provide and maintain our services</li>
                    <li>To analyze your spending patterns and provide insights</li>
                    <li>To send you notifications about bills, budgets, and financial goals</li>
                    <li>To improve our services and develop new features</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement bank-grade AES-256 encryption for all data at rest and in transit. Your financial data 
                    is stored on servers located in India, compliant with RBI data localization requirements. We conduct 
                    regular security audits and maintain SOC 2 Type II certification.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Data Sharing</h2>
                  <p className="text-muted-foreground">
                    We do not sell your personal data. We may share your information with trusted third-party service 
                    providers who assist us in operating our platform, subject to strict confidentiality agreements. 
                    We may also disclose information when required by law or to protect our rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                  <p className="text-muted-foreground">You have the right to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Export your data in a portable format</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
                  <p className="text-muted-foreground">
                    For privacy-related inquiries, please contact our Data Protection Officer at{" "}
                    <a href="mailto:privacy@finioraa.com" className="text-primary hover:underline">privacy@finioraa.com</a>
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

export default PrivacyPolicy;
