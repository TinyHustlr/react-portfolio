/* global braze */

export default function BrazeSDK() {
  // Initialize Braze SDK if braze is available
  if (typeof braze !== 'undefined') {
    braze.initialize('', {
        baseUrl: '',
        enableLogging: false,
        allowUserSuppliedJavascript: false,
    });
    console.log("Web SDK initialized");

    // Open Braze session after a short delay to ensure initialization is complete
    setTimeout(() => {
        braze.changeUser("mvp-test");
        console.log("User changed");
        braze.openSession();
        console.log("Session started");
    }, 1000);
  }

  return null;
}
