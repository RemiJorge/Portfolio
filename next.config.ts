import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true, // Désactive l'optimisation des images (Next.js dépend d'un serveur)
  },
};

export default nextConfig;
