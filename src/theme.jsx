import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#1F2937", // darker cool gray for primary text
          },
          neutral: {
            main: "#5B728A", // cooler tone
          },
          favColor: {
            main: "#E0E7FF", // light cool blue
          },
        }
      : {
          // palette values for dark mode
          text: {
            primary: "#E0E7FF", // light cool blue for primary text
          },
          neutral: {
            main: "#5B728A", // cooler tone
          },
          favColor: {
            main: "#374151", // dark cool gray
          },
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
