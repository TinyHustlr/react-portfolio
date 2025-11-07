import { useEffect } from "react";
import * as braze from "@braze/web-sdk";

export default function ContentCards() {
  useEffect(() => {
    // Wait until Braze has finished initializing and opened a session
    if (!braze.isInitialized()) {
      console.warn("Braze not initialized yet — waiting...");
      return;
    }

    // Subscribe to updates
    const subscription = braze.subscribeToContentCardsUpdates(() => {
      // Only call if display is available
      if (braze.display) {
        braze.display.showContentCards("feed");
      } else {
        console.warn("Braze display not ready yet");
      }
    });

    // Request cards from Braze
    braze.requestContentCardsRefresh();

    // Cleanup on unmount
    return () => subscription.remove();
  }, []);

  return <div id="feed"></div>;
}
