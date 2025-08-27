import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Initialize Braze SDK (loaded via CDN)
  braze.initialize('9d6d4815-121a-4429-96c1-37f70e975f01', {
  baseUrl: 'sdk.fra-02.braze.eu',
  enableLogging: true,
  allowUserSuppliedJavascript: false,
  },
  console.log("WEB SDK"),
);
  braze.openSession()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


