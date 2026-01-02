import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";

// Platform Feature Pages
import ExpenseTracking from "./pages/features/ExpenseTracking";
import BudgetPlanning from "./pages/features/BudgetPlanning";
import InvestmentTracking from "./pages/features/InvestmentTracking";
import BillManagement from "./pages/features/BillManagement";
import InsuranceTracker from "./pages/features/InsuranceTracker";

// Intelligence Feature Pages
import AIInsights from "./pages/features/AIInsights";
import SmartPredictions from "./pages/features/SmartPredictions";
import SpendingAnalytics from "./pages/features/SpendingAnalytics";
import GoalOptimization from "./pages/features/GoalOptimization";
import AutoActions from "./pages/features/AutoActions";

// Company Pages
import AboutUs from "./pages/company/AboutUs";
import Careers from "./pages/company/Careers";
import Blog from "./pages/company/Blog";
import PressKit from "./pages/company/PressKit";

// Legal Pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";
import GDPR from "./pages/legal/GDPR";

// Support Pages
import HelpCenter from "./pages/support/HelpCenter";
import ContactUs from "./pages/support/ContactUs";
import APIDocs from "./pages/support/APIDocs";
import Status from "./pages/support/Status";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            
            {/* Platform Features */}
            <Route path="/features/expense-tracking" element={<ExpenseTracking />} />
            <Route path="/features/budget-planning" element={<BudgetPlanning />} />
            <Route path="/features/investment-tracking" element={<InvestmentTracking />} />
            <Route path="/features/bill-management" element={<BillManagement />} />
            <Route path="/features/insurance-tracker" element={<InsuranceTracker />} />
            
            {/* Intelligence Features */}
            <Route path="/features/ai-insights" element={<AIInsights />} />
            <Route path="/features/smart-predictions" element={<SmartPredictions />} />
            <Route path="/features/spending-analytics" element={<SpendingAnalytics />} />
            <Route path="/features/goal-optimization" element={<GoalOptimization />} />
            <Route path="/features/auto-actions" element={<AutoActions />} />
            
            {/* Company Pages */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/press" element={<PressKit />} />
            
            {/* Legal Pages */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/gdpr" element={<GDPR />} />
            
            {/* Support Pages */}
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/api-docs" element={<APIDocs />} />
            <Route path="/status" element={<Status />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
