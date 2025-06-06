import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

import theme from "./theme.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssVarsProvider theme={theme} defaultMode="light">
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </StrictMode>
);
