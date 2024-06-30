import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

// Create a custom hook to use the app context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
