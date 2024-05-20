import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/fonts.css";
import "./styles/index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import theme from "./mui/Theme.js";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://api-ca-central-1.hygraph.com/v2/clvk7e1iq14f807tfp305jot0/master",
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);
