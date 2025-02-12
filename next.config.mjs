import { build } from "velite";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin());
    // 忽略動態導入警告
    config.module.rules.push({
      test: /velite.*\.js$/, // 匹配 velite 的相關文件
      parser: {
        system: false, // 禁用 System.import
      },
    });
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
