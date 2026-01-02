import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | FINIORAA</title>
        <meta name="description" content="FINIORAA Cookie Policy - Learn how we use cookies and similar technologies." />
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
              <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
              <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
                  <p className="text-muted-foreground">
                    Cookies are small text files stored on your device when you visit our website. They help us 
                    provide you with a better experience by remembering your preferences and understanding how 
                    you use our platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
                  
                  <div className="space-y-6">
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <h3 className="font-bold mb-2">Essential Cookies</h3>
                      <p className="text-muted-foreground text-sm">
                        Required for basic website functionality like authentication and security. 
                        These cannot be disabled.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-card border border-border">
                      <h3 className="font-bold mb-2">Analytics Cookies</h3>
                      <p className="text-muted-foreground text-sm">
                        Help us understand how visitors interact with our website, allowing us to improve 
                        our services. Data is anonymized.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-card border border-border">
                      <h3 className="font-bold mb-2">Preference Cookies</h3>
                      <p className="text-muted-foreground text-sm">
                        Remember your settings like theme preference and language to provide a personalized experience.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
                  <p className="text-muted-foreground">
                    You can control cookies through your browser settings. However, disabling certain cookies 
                    may affect the functionality of our platform. Most browsers allow you to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                    <li>View cookies stored on your device</li>
                    <li>Delete all or specific cookies</li>
                    <li>Block third-party cookies</li>
                    <li>Set preferences for specific websites</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
                  <p className="text-muted-foreground">
                    We may use third-party services that set their own cookies, including analytics providers 
                    and authentication services. These are governed by their respective privacy policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground">
                    For questions about our cookie policy, contact us at{" "}
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

export default CookiePolicy;
