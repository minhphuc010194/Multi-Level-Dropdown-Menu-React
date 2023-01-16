import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// styles
import "./App.css";
const colors = {
   brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
   },
};
const theme = extendTheme({ colors });
const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLAreaElement
);
root.render(
   <ChakraProvider theme={theme}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </ChakraProvider>
);
