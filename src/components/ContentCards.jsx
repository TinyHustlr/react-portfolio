import { useEffect } from "react";
import * as braze from "@braze/web-sdk";

export default function ContentCards() {
  useEffect(() => {
    // Subscribe to updates (optional but good practice)
    const subscription = braze.subscribeToContentCardsUpdates(() => {
      // When cards update, display the default feed
      braze.display.showContentCards();
    });

    // Trigger refresh
    braze.requestContentCardsRefresh();

    return () => subscription.remove();
  }, []);

  // The Braze SDK will inject its own default UI here
  console.log("Cards loaded successfully")
  return <div id="feed"></div>;
}
