import { useEffect } from "react";
import * as braze from "@braze/web-sdk";

export default function ContentCards() {
  useEffect(() => {
    // Subscribe to updates
    braze.showContentCards("feed");

    // Request cards from Braze
    braze.requestContentCardsRefresh();
  }, []);

  return <div id="feed"></div>;
}
