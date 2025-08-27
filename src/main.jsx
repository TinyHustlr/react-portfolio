import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Initialize Braze SDK (loaded via CDN)
braze.initialize('9d6d4815-121a-4429-96c1-37f70e975f01', {
  baseUrl: 'sdk.fra-02.braze.eu',
  enableLogging: true,
  allowUserSuppliedJavascript: false,
});
console.log("WEB SDK");

// Open Braze session after a short delay to ensure initialization is complete
setTimeout(() => {
  braze.changeUser("mvp-test");
  console.log("CHANGE USER");
  braze.openSession();
  console.log("SESSION STARTED");
}, 1000);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


