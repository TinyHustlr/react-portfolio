import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import * as braze from "@braze/web-sdk";

function BrazeInitializer() {
  useEffect(() => {
    console.log("Initializing Braze...");

// f1cc2684-5ef1-46ed-b0d9-f4a047f3a6b1
// https://sdk.fra-02.braze.eu

    braze.initialize("552835c6-3d6b-4db5-99cd-5798d8ea678f", {
      baseUrl: "sdk.iad-07.braze.com",
      enableLogging: true,
      allowUserSuppliedJavascript: true,
    });

    braze.openSession();
    console.log("Session opened");

    braze.changeUser("mvp-test");
    console.log("User changed to mvp-test");

    setTimeout(() => {
      braze.automaticallyShowInAppMessages();
      console.log("In-app messages enabled");
    }, 1000);

    setTimeout(() => {
      braze.requestPushPermission();
      console.log("Requesting push permission v2");
    }, 5000);

    const container = document.getElementById("braze-content-cards");
    braze.showContentCards(container);

braze.openSession();

    window.braze = braze;
  }, []);

  return null;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
    <BrazeInitializer />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  </StrictMode>
);
