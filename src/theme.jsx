import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          background: {
            default: "#F9FAFB", // light gray for the default background
            paper: "#FFFFFF", // white for paper elements
          },
          text: {
            primary: "#1F2937", // darker cool gray for primary text
            secondary: "#4B5563", // medium cool gray for secondary text
            disabled: "#9CA3AF", // light gray for disabled text
          },
          primary: {
            main: "#3B82F6", // blue for primary elements like buttons
          },
          secondary: {
            main: "#EF4444", // red for secondary elements like alerts
          },
          neutral: {
            main: "#5B728A", // cooler tone for neutral elements
          },
          accent: {
            main: "#10B981", // green for accents and highlights
          },
          favColor: {
            main: "#E0E7FF", // light cool blue for favorite items
          },
          divider: "#E5E7EB", // light gray for dividers
        }
      : {
          // palette values for dark mode
          background: {
            default: "#1F2937", // dark cool gray for the default background
            paper: "#374151", // dark gray for paper elements
          },
          text: {
            primary: "#E0E7FF", // light cool blue for primary text
            secondary: "#9CA3AF", // medium light gray for secondary text
            disabled: "#6B7280", // darker gray for disabled text
          },
          primary: {
            main: "#3B82F6", // blue for primary elements like buttons
          },
          secondary: {
            main: "#EF4444", // red for secondary elements like alerts
          },
          neutral: {
            main: "#9CA3AF", // light gray for neutral elements
          },
          accent: {
            main: "#10B981", // green for accents and highlights
          },
          favColor: {
            main: "#374151", // dark cool gray for favorite items
          },
          divider: "#4B5563", // dark gray for dividers
        }),
  },
  
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
