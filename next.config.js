// next.config.js
const { Life_Savers } = require('next/font/google');

module.exports = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  webpack: (config) => {
    class VeliteWebpackPlugin {
      static started = false;

      apply(compiler) {
        compiler.hooks.beforeRun.tapPromise('VeliteWebpackPlugin', async () => {
          if (VeliteWebpackPlugin.started) return;
          VeliteWebpackPlugin.started = true;
          const dev = compiler.options.mode === 'development';
          const { build } = await import('velite');
          await build({ watch: dev, clean: !dev });
        });
      }
    }

    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
};
