import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import AnalyticsProvider from "./providers/AnalyticsProvider.tsx";
import environment from "./utils/environment.ts";
import SmoothScrolling from "./components/ui/smooth-scrolling.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AnalyticsProvider props={environment.GA4_MEASUREMENT_ID as string}>
        <ThemeProvider defaultTheme="dark">
          <SmoothScrolling>
            <App />
          </SmoothScrolling>
        </ThemeProvider>
      </AnalyticsProvider>
    </BrowserRouter>
  </StrictMode>
);
