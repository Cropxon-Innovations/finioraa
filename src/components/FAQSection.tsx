import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, CreditCard, Lock, HelpCircle } from "lucide-react";

const faqCategories = [
  {
    title: "Security & Privacy",
    icon: Shield,
    faqs: [
      {
        question: "How secure is my financial data on FINIORAA?",
        answer: "FINIORAA uses bank-grade AES-256 encryption for all data at rest and TLS 1.3 for data in transit. We're SOC 2 Type II certified and undergo regular third-party security audits. Your data is stored in ISO 27001 certified data centers in India, ensuring compliance with local data protection laws.",
      },
      {
        question: "Can FINIORAA access my bank accounts directly?",
        answer: "We use read-only account aggregation through RBI-licensed Account Aggregators. This means we can only view your transactions—we cannot initiate any transfers or payments. You have full control over which accounts to connect and can revoke access anytime.",
      },
      {
        question: "What happens to my data if I delete my account?",
        answer: "When you delete your account, all your personal and financial data is permanently erased from our servers within 30 days, as per our data retention policy. You can also export all your data before deletion. We maintain only anonymized, aggregated data for product improvement.",
      },
    ],
  },
  {
    title: "Pricing & Billing",
    icon: CreditCard,
    faqs: [
      {
        question: "Is there a free trial for Pro features?",
        answer: "Yes! All new users get a 14-day free trial of Pro features. No credit card required to start. After the trial, you can continue with the Free plan or upgrade to Pro. We'll send you a reminder before your trial ends.",
      },
      {
        question: "Can I cancel my subscription anytime?",
        answer: "Absolutely. You can cancel your Pro or Enterprise subscription at any time from your account settings. Your access continues until the end of your current billing period, and you can always downgrade to the Free plan without losing your historical data.",
      },
      {
        question: "Do you offer refunds?",
        answer: "We offer a 30-day money-back guarantee for first-time Pro subscribers. If you're not satisfied, contact our support team within 30 days of your first payment, and we'll process a full refund—no questions asked.",
      },
    ],
  },
  {
    title: "Data & Privacy",
    icon: Lock,
    faqs: [
      {
        question: "Do you sell my data to third parties?",
        answer: "Never. Your data is yours, and we will never sell, rent, or share your personal or financial information with third parties for marketing purposes. We only use aggregated, anonymized data internally to improve our products.",
      },
      {
        question: "How does FINIORAA handle my documents in the vault?",
        answer: "Documents uploaded to the vault are encrypted using your unique key before storage. Even our team cannot access your documents. We support all major formats (PDF, images, spreadsheets) and you can organize them with custom tags and folders.",
      },
      {
        question: "Is FINIORAA compliant with Indian data protection laws?",
        answer: "Yes, we're fully compliant with the Digital Personal Data Protection Act (DPDPA) 2023 and RBI guidelines for financial data handling. We store all data in India, provide clear consent mechanisms, and give you full control over your data.",
      },
    ],
  },
  {
    title: "Platform Features",
    icon: HelpCircle,
    faqs: [
      {
        question: "How does the AI-powered insights feature work?",
        answer: "Our AI analyzes your spending patterns, income, and financial goals to provide personalized recommendations. It can predict upcoming expenses, identify savings opportunities, and alert you to unusual transactions. The AI improves over time as it learns your habits.",
      },
      {
        question: "Can I use FINIORAA for business expenses?",
        answer: "While FINIORAA is primarily designed for personal finance, our Enterprise plan supports small business use with features like multiple users, expense categorization for GST, and separate business dashboards. For larger businesses, we offer custom solutions.",
      },
      {
        question: "Does FINIORAA support multiple currencies?",
        answer: "Yes! Pro and Enterprise users can track expenses and investments in multiple currencies. We provide real-time exchange rates and automatically convert foreign transactions to INR for unified reporting. Perfect for NRIs and frequent travelers.",
      },
      {
        question: "Can I import data from other finance apps?",
        answer: "Absolutely. We support data import from popular apps like Money Manager, Walnut, and ETMONEY via CSV/Excel. We also support direct bank statement imports. Our team can help you migrate from any platform.",
      },
    ],
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="faq">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-gold bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about FINIORAA. Can't find the answer? Contact our support team.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <Accordion type="single" collapsible className="space-y-2">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${category.title}-${faqIndex}`}
                    className="border-b border-border/30 last:border-0"
                  >
                    <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="mailto:support@finioraa.com"
            className="text-primary hover:text-accent transition-colors font-semibold"
          >
            Contact Support →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
