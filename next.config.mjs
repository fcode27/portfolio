/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;