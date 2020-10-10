const withImages = require('next-images')
const withPWA = require('next-pwa')

module.exports = withPWA(withImages({
  esModule: true,
  pwa: {
    dest: 'public'
}
}))
