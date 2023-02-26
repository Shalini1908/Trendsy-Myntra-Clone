import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import { extendTheme } from "@chakra-ui/react"
import App from "./App";
// import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
 import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = extendTheme({
   initialColorMode: 'light',
   useSystemColorMode: false,
 })

root.render(
   <ChakraProvider theme={theme}>
    <BrowserRouter>
        <App />
      </BrowserRouter>
     </ChakraProvider>
);
