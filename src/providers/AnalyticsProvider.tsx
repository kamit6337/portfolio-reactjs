import { initGA, logPageView } from "@/lib/analytics";
import { ReactNode, useEffect } from "react";

type Children = { children: ReactNode; props: string };

const AnalyticsProvider = ({ children, props }: Children) => {
  useEffect(() => {
    initGA(props);
    logPageView();

    // Log each page change as a pageview with Google Analytics 4
    const handleRouteChange = () => {
      logPageView();
    };

    handleRouteChange(); // Log the initial page load
  }, [props]);

  return <>{children}</>;
};

export default AnalyticsProvider;
