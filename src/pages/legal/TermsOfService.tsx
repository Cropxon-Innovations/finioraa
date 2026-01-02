import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | FINIORAA</title>
        <meta name="description" content="FINIORAA Terms of Service - Read our terms and conditions for using our platform." />
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
              <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
              <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing or using FINIORAA services, you agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                  <p className="text-muted-foreground">
                    FINIORAA is a personal finance management platform that helps users track expenses, manage budgets, 
                    monitor investments, and gain financial insights. Our services are provided "as is" and we reserve 
                    the right to modify or discontinue features at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>You must be at least 18 years old to use our services</li>
                    <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                    <li>You must provide accurate and complete information</li>
                    <li>You agree not to use the service for any unlawful purpose</li>
                    <li>You will not attempt to reverse engineer or compromise our security measures</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Financial Information Disclaimer</h2>
                  <p className="text-muted-foreground">
                    FINIORAA provides financial tracking and insights for informational purposes only. We are not 
                    registered investment advisors, and our insights should not be considered as financial advice. 
                    Always consult with a qualified financial advisor before making investment decisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Account Security</h2>
                  <p className="text-muted-foreground">
                    You are responsible for all activities that occur under your account. Notify us immediately 
                    if you suspect any unauthorized access. We implement industry-standard security measures but 
                    cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    All content, features, and functionality of FINIORAA are owned by CROPXON Technologies Private Limited 
                    and are protected by intellectual property laws. You may not copy, modify, or distribute our content 
                    without explicit permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    To the maximum extent permitted by law, FINIORAA shall not be liable for any indirect, incidental, 
                    special, or consequential damages arising from your use of our services. Our total liability shall 
                    not exceed the amount paid by you for the service in the past 12 months.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
                  <p className="text-muted-foreground">
                    These terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive 
                    jurisdiction of the courts in Bangalore, Karnataka.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Contact</h2>
                  <p className="text-muted-foreground">
                    For questions about these terms, contact us at{" "}
                    <a href="mailto:legal@finioraa.com" className="text-primary hover:underline">legal@finioraa.com</a>
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

export default TermsOfService;
