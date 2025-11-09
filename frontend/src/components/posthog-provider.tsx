
import { useEffect } from "react";

export function PostHog() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("posthog-js")
        .then(({ default: posthog }) => {
          if (!posthog.__loaded) {
            posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
              api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
              ui_host: import.meta.env.VITE_PUBLIC_POSTHOST_UI_HOST,
              person_profiles: "always"
            });
          }
        })
        .catch(console.error);
    }
  }, []);

  return null;
}