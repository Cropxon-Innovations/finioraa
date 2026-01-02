import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowItWorks from "@/components/HowItWorks";
import SecuritySection from "@/components/SecuritySection";
import AISection from "@/components/AISection";
import FutureSection from "@/components/FutureSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import MobileShowcase from "@/components/MobileShowcase";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ComparisonSection from "@/components/ComparisonSection";
import InsuranceSection from "@/components/InsuranceSection";
import IndiaFirstSection from "@/components/IndiaFirstSection";
import ROICalculator from "@/components/ROICalculator";
import MobileCTA from "@/components/MobileCTA";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>FINIORAA – Your Personal Finance Operating System | India's Most Intelligent Finance Platform</title>
        <meta 
          name="description" 
          content="Track, understand, and optimize every rupee with FINIORAA. AI-powered expense tracking, investments, budgets, and financial insights. Bank-grade security, made for India." 
        />
        <meta name="keywords" content="personal finance, expense tracker, budget app, investment tracking, financial planning, India, fintech" />
        <link rel="canonical" href="https://finioraa.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="FINIORAA – Your Personal Finance Operating System" />
        <meta property="og:description" content="Track, understand, and optimize every rupee with AI-powered intelligence and bank-grade security." />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FINIORAA – Your Personal Finance Operating System" />
        <meta name="twitter:description" content="Track, understand, and optimize every rupee with AI-powered intelligence." />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeaturesGrid />
        <HowItWorks />
        <SecuritySection />
        <AISection />
        <IndiaFirstSection />
        <AboutSection />
        <MobileShowcase />
        <InsuranceSection />
        <PricingSection />
        <TestimonialsSection />
        <ROICalculator />
        <ComparisonSection />
        <FAQSection />
        <FutureSection />
        <CTABanner />
        <Footer />
        <MobileCTA />
      </main>
    </>
  );
};

export default Index;
