/* global braze */

// export default function BrazeSDK() {
//   // Initialize Braze SDK if braze is available
//   if (typeof braze !== 'undefined') {
//     braze.initialize('', {
//         baseUrl: '',
//         enableLogging: false,
//         allowUserSuppliedJavascript: false,
//     });
//     console.log("WEB SDK");

//     // Open Braze session after a short delay to ensure initialization is complete
//     setTimeout(() => {
//         braze.changeUser("mvp-test");
//         console.log("CHANGE USER");
//         braze.openSession();
//         console.log("SESSION STARTED");
//     }, 1000);
//   }

//   return null; // This component doesn't render anything
// }
