import { build } from "velite";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin());
    /// 啟用 Webpack 的實驗性功能
    config.experiments = {
      topLevelAwait: true,ß
    };
    return config;
  },
};

class VeliteWebpackPlugin {
  static started = false;
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === "development";
      // 僅在生產模式下運行 build
      if (!dev) {
        await build({ watch: false, clean: true });
      }
    });
  }
}

export default nextConfig;
