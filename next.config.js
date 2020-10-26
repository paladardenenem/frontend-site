const withImages = require('next-images');
const withVideos = require('next-videos');

const withPWA = require('next-pwa');

module.exports = withPWA(
  withImages(
    withVideos({
      esModule: true,
      pwa: {
        dest: 'public'
      }
    })
  )
);
