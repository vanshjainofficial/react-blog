// next.config.js
const { Life_Savers } = require('next/font/google');

module.exports = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};
