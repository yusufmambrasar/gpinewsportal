module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: "http://localhost:1412/"
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'GPI "Jalan Suci"';
      return args;
    });
  },
  pwa: {
    name: 'GPI "Jalan Suci"',
    short_name: 'GPI "Jalan Suci"',
    theme_color: "#1976d2",
    background_color: "#fafafa",
    manifestOptions: {
      "icons": [{
          "src": "assets/icons/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "assets/icons/icon-96x96.png",
          "sizes": "96x96",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "assets/icons/icon-128x128.png",
          "sizes": "128x128",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "assets/icons/icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "assets/icons/icon-152x152.png",
          "sizes": "152x152",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "assets/icons/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "assets/icons/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "assets/icons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable any"
        }
      ]
    }
  }
}