import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "InvisiShield ArmorFilm™ - We Stop Bullets. #Clearly.",
    short_name: "InvisiShield Armor",
    description:
      "Next-generation transparent armor technology. Life-saving ballistic window film protection for schools, police, government, and commercial buildings.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
