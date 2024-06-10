import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import { google_auth } from "./constants/developments";
import { registerLicense } from "@syncfusion/ej2-base";

import { createRoot } from "react-dom/client";
import Schedule from "./pages/Dentist/components/Schedule/Schedule";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NBaF1cWmhOYVVpR2Nbe05xdV9HZFZVQGY/P1ZhSXxXdkNjXn9ec3xXTmFdV0U="
);
const container = document.getElementById("root");
const root = createRoot(container!);


//cái này là gì vậy
// root.render(<Schedule />);

const rootElement = document.getElementById("root");
if (rootElement) {
  //cái này là gì vậy
  // ReactDOM.createRoot(rootElement)
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <GoogleOAuthProvider clientId={google_auth.client_id}>
          <App />
        </GoogleOAuthProvider>
      </React.StrictMode>
    </BrowserRouter>
  )
  //);
}
