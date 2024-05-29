import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { RecoilRoot } from "recoil";

import App from "./App.tsx";

axios.defaults.baseURL = "https://snapevent.site";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
