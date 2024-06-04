import Header1 from "./components/1-header/Header1";
import Header2 from "./components/1-header/Header2";
import Header3 from "./components/1-header/Header3";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Footer from "./components/4-footer/Footer";

// theme mode
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Hero />
        <Main />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
