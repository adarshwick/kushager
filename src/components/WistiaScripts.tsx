"use client";

import { useEffect } from "react";

const SCRIPTS = [
  { src: "https://fast.wistia.com/player.js", type: "text/javascript" },
  { src: "https://fast.wistia.com/embed/wmtfrmw8yi.js", type: "module" },
  { src: "https://fast.wistia.com/embed/70gxysmmue.js", type: "module" },
];

export default function WistiaScripts() {
  useEffect(() => {
    SCRIPTS.forEach(({ src, type }) => {
      if (document.querySelector(`script[src="${src}"]`)) return;
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      if (type === "module") s.type = "module";
      document.head.appendChild(s);
    });
  }, []);

  return null;
}
