/* global braze */

export default function BrazeSDK() {
  // Initialize Braze SDK if braze is available
  if (typeof braze !== 'undefined') {
    braze.initialize('9d6d4815-121a-4429-96c1-37f70e975f01', {
        baseUrl: 'sdk.fra-02.braze.eu',
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
