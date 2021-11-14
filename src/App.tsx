import React from "react";
import './App.css';
// import { ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import Routes from "./navigation/Routes";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryCLient } from "./modules/cache/queryCLient";
import { ReactQueryDevtools } from "react-query/devtools";
import theme from "./styles/theme";

function App() {
  return (
    <QueryClientProvider client={queryCLient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
