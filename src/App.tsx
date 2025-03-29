
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/Index";
import ResumeBuilder from "./pages/ResumeBuilder";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import PortfolioTemplates from "./pages/PortfolioTemplates";
import MinimalistTemplate from "./pages/templates/MinimalistTemplate";
import CreativeTemplate from "./pages/templates/CreativeTemplate";
import ProfessionalTemplate from "./pages/templates/ProfessionalTemplate";
import InteractiveTemplate from "./pages/templates/InteractiveTemplate";
import IndustryTemplate from "./pages/templates/IndustryTemplate";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/resume-builder" element={<ResumeBuilder />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/portfolio-templates" element={<PortfolioTemplates />} />
              <Route path="/about" element={<About />} />
              <Route path="/templates/minimalist" element={<MinimalistTemplate />} />
              <Route path="/templates/creative" element={<CreativeTemplate />} />
              <Route path="/templates/professional" element={<ProfessionalTemplate />} />
              <Route path="/templates/interactive" element={<InteractiveTemplate />} />
              <Route path="/templates/industry" element={<IndustryTemplate />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
