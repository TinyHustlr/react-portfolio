// /* global braze */

// export default function BrazeSDK() {
//   // Initialize Braze SDK if braze is available
//   if (typeof braze !== 'undefined') {
//     braze.initialize('import.meta.env.VITE_BRAZE_API_KEY', {
//         baseUrl: 'sdk.fra-02.braze.eu',
//         enableLogging: false,
//         allowUserSuppliedJavascript: false,
//     });
//     console.log("Web SDK initialized");

//     // optionally show all in-app messages without custom handling
//     braze.automaticallyShowInAppMessages();
//     console.log("In app message to show")


//     // Open Braze session after a short delay to ensure initialization is complete
//     setTimeout(() => {
//         braze.changeUser("mvp-test");
//         console.log("User changed");
//         braze.openSession();
//         console.log("Session started");
//     }, 1000);
//   }

//   return null;
// }
