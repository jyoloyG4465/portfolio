/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/portfolio" : "",
  assetPrefix: isGitHubPages ? "/portfolio/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/portfolio" : "",
  },
};

export default nextConfig;
