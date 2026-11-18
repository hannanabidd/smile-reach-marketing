"use client";

import Script from "next/script";

// Smile Reach Marketing "Lisa" AI chat widget (Chatwoot SDK).
const CHATWOOT_BASE_URL = "https://inbox.kitted.design";
const CHATWOOT_WEBSITE_TOKEN = "HfxWLeZXKyb7M2dhevFRzN77";

declare global {
  interface Window {
    chatwootSDK?: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
  }
}

export default function ChatWidget() {
  return (
    <Script
      id="smilereach-chat"
      src={`${CHATWOOT_BASE_URL}/packs/js/sdk.js`}
      strategy="lazyOnload"
      onLoad={() => {
        window.chatwootSDK?.run({
          websiteToken: CHATWOOT_WEBSITE_TOKEN,
          baseUrl: CHATWOOT_BASE_URL,
        });
      }}
    />
  );
}
