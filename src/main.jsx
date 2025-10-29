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
console.log("Initalize");

window.braze = braze;
console.log("Window now global")

setTimeout(() => {
    braze.changeUser("mvp-test");
    console.log("User changed to mvp-test");
    braze.openSession();
    console.log("Session opened");
}, 1000); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


