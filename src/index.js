import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


import {NextUIProvider} from  "@nextui-org/react"

import Router from "./Router";

  const root = ReactDOM.createRoot (document.getElementById("root"));
  root.render(
    <NextUIProvider>
      <Router />
    </NextUIProvider>
  );
