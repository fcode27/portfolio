/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';


// const nextConfig = {
//     output: "export",
//     reactStrictMode: true,
//     images: {
//         loader: "default",
//         unoptimized: true,
//     },
//     basePath: isProd ? '/portfolio' : '',
//     assetPrefix: isProd ? '/portfolio/' : '',
// };

// export default nextConfig


const nextConfig = {
  output: "export",
    reactStrictMode: true,
  basePath: isProd ? "/portfolio" : "",
    assetPrefix: isProd ? "/portfolio/" : "",
    images: {
        unoptimized: true
    }
  
//   images: {
//     loader: "custom",
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//   },
//   transpilePackages: ["next-image-export-optimizer"],
//   env: {
//     nextImageExportOptimizer_imageFolderPath: "public",
//     nextImageExportOptimizer_exportFolderPath: "out",
//     nextImageExportOptimizer_quality: "75",
//     nextImageExportOptimizer_storePicturesInWEBP: "true",
//     nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
//     nextImageExportOptimizer_generateAndUseBlurImages: "true",
//     nextImageExportOptimizer_remoteImageCacheTTL: "0",
//   },
};
export default nextConfig