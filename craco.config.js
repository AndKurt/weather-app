const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces/'),
      '@mock': path.resolve(__dirname, 'src/mock/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
  addons: [
    {
      name: 'storybook-preset-craco',
      options: {
        cracoConfigFile: '../craco.config.js',
      },
    },
  ],
}
