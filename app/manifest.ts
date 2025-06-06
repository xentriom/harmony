import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Harmony - Group Chat That's All Fun & Games",
    short_name: "Harmony",
    description: "Harmony is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out.",
    start_url: "/home",
    display: "standalone",
    background_color: "#0f172b",
    theme_color: "#0f172b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon"
      }
    ]
  };
}