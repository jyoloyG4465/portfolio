/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export", // 静的出力を有効にする
  trailingSlash: true, // 各ページのパス末尾に `/` をつける（index.htmlが必要なため）
};
module.exports = nextConfig;

export default nextConfig;
