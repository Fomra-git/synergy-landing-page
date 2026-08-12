"use client";

import { useEffect } from "react";

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.bottom > 0 && rect.right > 0 && rect.top < window.innerHeight && rect.left < window.innerWidth;
}

function reloadStuckImages() {
  document.querySelectorAll("img").forEach((img) => {
    const stuck = !img.complete || img.naturalWidth === 0;
    if (stuck && img.src && isInViewport(img)) {
      const src = img.src;
      img.src = "";
      img.src = src;
    }
  });
}

// Tabs left inactive for a while can leave in-flight (or not-yet-issued)
// image requests permanently stalled — browsers don't auto-retry them once
// the tab regains focus. A hard refresh "fixes" it only because it re-fetches
// everything from scratch. This retries just the on-screen images that are
// still stuck, without requiring the user to reload the page.
export default function ImageRecovery() {
  useEffect(() => {
    function handleVisible() {
      if (document.visibilityState !== "visible") return;
      requestAnimationFrame(reloadStuckImages);
      setTimeout(reloadStuckImages, 1000);
    }

    document.addEventListener("visibilitychange", handleVisible);
    window.addEventListener("focus", handleVisible);
    return () => {
      document.removeEventListener("visibilitychange", handleVisible);
      window.removeEventListener("focus", handleVisible);
    };
  }, []);

  return null;
}
