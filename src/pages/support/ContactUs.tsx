import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  Send,
  Loader2
} from "lucide-react";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "We will get back to you within 24 hours.",
    });
    
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | FINIORAA</title>
        <meta name="description" content="Get in touch with FINIORAA. We are here to help with your questions and feedback." />
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-background pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Have questions or feedback? We would love to hear from you.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email Us</h3>
                      <p className="text-muted-foreground text-sm mb-2">For general inquiries</p>
                      <a href="mailto:hello@finioraa.com" className="text-primary hover:underline">
                        hello@finioraa.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Live Chat</h3>
                      <p className="text-muted-foreground text-sm mb-2">Available 24/7</p>
                      <button className="text-secondary hover:underline">Start a conversation</button>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Office</h3>
                      <p className="text-muted-foreground text-sm">
                        CROPXON Technologies Pvt. Ltd.<br />
                        Koramangala, Bangalore<br />
                        Karnataka 560034, India
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactUs;
