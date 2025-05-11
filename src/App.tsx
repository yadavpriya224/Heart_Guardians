
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PatientsPage from "./pages/PatientsPage";
import RiskAnalysisPage from "./pages/RiskAnalysisPage";
import FollowUpsPage from "./pages/FollowUpsPage";
import ReportsPage from "./pages/ReportsPage";
import AboutPage from "./pages/AboutPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/risk-analysis" element={<RiskAnalysisPage />} />
          <Route path="/follow-ups" element={<FollowUpsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
