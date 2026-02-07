import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTopHandler() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Disable native scroll restoration to prevent browser from restoring position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Immediate scroll to top
    window.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    
  }, [pathname]);

  return null;
}
