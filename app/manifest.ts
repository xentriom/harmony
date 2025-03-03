import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Harmony - Group Chat That's All Fun and Games",
    short_name: "Harmony",
    description: "Harmony is great for playing games and chatting with friends, or even building a worldwide community.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon"
      }
    ]
  };
}