/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true
  },
  basePath: "/ProyectoLactosa",
  assetPrefix: "/ProyectoLactosa/"
}

module.exports = nextConfig
