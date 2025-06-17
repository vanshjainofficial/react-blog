const { Life_Savers } = require('next/font/google');

/** @type {import('next').NextConfig} */
module.exports = {
  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? true : false,
  },
  
  // Webpack configuration with VeliteWebpackPlugin
  webpack: (config) => {
    // Custom Velite plugin
    class VeliteWebpackPlugin {
      static started = false;
      apply(compiler) {
        compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
          if (VeliteWebpackPlugin.started) return;
          VeliteWebpackPlugin.started = true;
          const dev = compiler.options.mode === 'development';
          const { build } = await import('velite');
          await build({ watch: dev, clean: !dev });
        });
      }
    }

    // Adding the custom plugin to Webpack
    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
};
