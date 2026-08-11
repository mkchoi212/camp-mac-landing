import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root: a stray package-lock.json in $HOME otherwise makes
  // Turbopack infer /Users/mchoi as the root and skip this project's lockfile.
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;
