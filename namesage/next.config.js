/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "standalone",
  poweredByHeader: false,
  // Configure pageExtensions to support MDX
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  // 添加以下配置以解决部署问题
  experimental: {
    serverActions: true,
  },
  // 如果您使用了自定义域名，可能需要配置
  // basePath: '',
};

module.exports = nextConfig;