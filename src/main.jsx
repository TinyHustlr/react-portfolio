import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as braze from '@braze/web-sdk'

// Initialize Braze SDK
braze.initialize('9d6d4815-121a-4429-96c1-37f70e975f01', {
    baseUrl: 'https://sdk.fra-02.braze.eu',
    enableLogging: true,
    allowUserSuppliedJavascript: false,
});
console.log("Web SDK initialized");

window.braze = braze;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


