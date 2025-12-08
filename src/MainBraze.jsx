// import { StrictMode, useEffect } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import * as braze from "@braze/web-sdk";

// function BrazeInitializer() {
//   useEffect(() => {
//     console.log("Initializing Braze...");

//     braze.initialize("9d6d4815-121a-4429-96c1-37f70e975f01", {
//       baseUrl: "https://sdk.fra-02.braze.eu",
//       enableLogging: true,
//       allowUserSuppliedJavascript: true,
//     });

//     braze.openSession();
//     console.log("Session opened");

//     braze.changeUser("mvp-test");
//     console.log("User changed to mvp-test");

//     setTimeout(() => {
//       braze.automaticallyShowInAppMessages();
//       console.log("In-app messages enabled (delayed)");
//     }, 1000);


//     window.braze = braze;
//   }, []);

//   return null;
// }

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <>
//       <BrazeInitializer />
//       <App />
//     </>
//   </StrictMode>
// );
