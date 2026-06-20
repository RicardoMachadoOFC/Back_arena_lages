import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import NewsPage from "./pages/NewsPage";
import RadioPage from "./pages/RadioPage";
import TrainerPage from "./pages/TrainerPage";
import TicketsPage from "./pages/TicketsPage";
import RewardsPage from "./pages/RewardsPage";
import TeamsShopPage from "./pages/TeamsShopPage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/chat/:channel"} component={ChatPage} />
      <Route path={"/news"} component={NewsPage} />
      <Route path={"/radio"} component={RadioPage} />
      <Route path={"/trainer"} component={TrainerPage} />
      <Route path={"/tickets"} component={TicketsPage} />
      <Route path={"/rewards"} component={RewardsPage} />
      <Route path={"/teams-shop"} component={TeamsShopPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
