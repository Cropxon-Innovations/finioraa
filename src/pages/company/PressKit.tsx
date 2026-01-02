import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Image, FileText, Palette } from "lucide-react";

const PressKit = () => {
  return (
    <>
      <Helmet>
        <title>Press Kit | FINIORAA - Media Resources</title>
        <meta name="description" content="Download FINIORAA logos, brand guidelines, and media resources for press and publications." />
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
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Press <span className="gradient-text">Kit</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to write about FINIORAA. Download our logos, brand assets, and company information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Brand Assets */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Logo Pack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-card border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Image className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Logo Pack</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  FINIORAA logos in various formats including PNG, SVG, and EPS for light and dark backgrounds.
                </p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" /> Download Logos
                </Button>
              </motion.div>

              {/* Brand Guidelines */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-xl bg-card border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Palette className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Brand Guidelines</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Our complete brand guidelines including colors, typography, and usage rules.
                </p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" /> Download Guidelines
                </Button>
              </motion.div>

              {/* Company Fact Sheet */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-xl bg-card border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fact Sheet</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Key facts, statistics, and company information for journalists and publications.
                </p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" /> Download Facts
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brand Colors */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Brand Colors</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 rounded-xl bg-primary mx-auto mb-3" />
                <p className="font-medium">Primary Blue</p>
                <p className="text-sm text-muted-foreground">#3B82F6</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-xl bg-secondary mx-auto mb-3" />
                <p className="font-medium">Emerald</p>
                <p className="text-sm text-muted-foreground">#10B981</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-xl bg-accent mx-auto mb-3" />
                <p className="font-medium">Gold</p>
                <p className="text-sm text-muted-foreground">#F59E0B</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-xl bg-background border border-border mx-auto mb-3" />
                <p className="font-medium">Dark Navy</p>
                <p className="text-sm text-muted-foreground">#0A1628</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
              <p className="text-muted-foreground mb-6">
                For press inquiries, interviews, or additional materials, please contact us at:
              </p>
              <a href="mailto:press@finioraa.com" className="text-primary font-medium text-lg hover:underline">
                press@finioraa.com
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PressKit;
