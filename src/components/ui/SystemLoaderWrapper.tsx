"use client";

import { useState, useEffect } from "react";
import { SystemLoader } from "./SystemLoader";

/**
 * SystemLoaderWrapper - Client Component Wrapper
 * Wird im Server Component Layout verwendet, um den SystemLoader zu rendern
 */
export const SystemLoaderWrapper = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Prüfe, ob die Seite bereits geladen wurde (z.B. bei Navigation)
    if (typeof window !== "undefined") {
      const hasSeenLoader = sessionStorage.getItem("systemLoaderShown");
      if (hasSeenLoader) {
        setShowLoader(false);
        setHasLoaded(true);
        return;
      }
    }
  }, []);

  const handleComplete = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("systemLoaderShown", "true");
    }
    setShowLoader(false);
    setHasLoaded(true);
  };

  if (!showLoader && hasLoaded) {
    return null;
  }

  return <SystemLoader onComplete={handleComplete} duration={2000} />;
};
