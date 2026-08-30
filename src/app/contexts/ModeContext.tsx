import { createContext, useContext, ReactNode } from "react";

export type PortfolioMode = "explorer" | "recruiter";

interface ModeContextType {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  toggleMode: () => void;
  isTransitioning: boolean;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const mode: PortfolioMode = "explorer";
  const isTransitioning = false;

  const setMode = () => {};
  const toggleMode = () => {};

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode, isTransitioning }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
