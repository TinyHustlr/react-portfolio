import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as braze from '@braze/web-sdk'

// Initialize Braze SDK
braze.initialize(import.meta.env.VITE_BRAZE_API_KEY, {
    baseUrl: 'https://sdk.fra-02.braze.eu',
    enableLogging: true,
    allowUserSuppliedJavascript: false,
});
console.log("Web SDK initialized");

// Open Braze session after a short delay to ensure initialization is complete
    braze.changeUser("mvp-test");
    console.log("User changed")
    braze.openSession();
    console.log("Session open")
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


