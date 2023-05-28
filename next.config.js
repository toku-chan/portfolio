/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // pagesディレクトリに存在するページ扱いしないファイルを指定
  pageExtensions: ["ResetStyles.ts"]
};

module.exports = nextConfig;
