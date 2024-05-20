const path = require('path')

const nextConfig = {
  image: {
    domains: ['fayco.imgix.net'],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
