({
  appDir: './',
  dir: './vajoy',
  baseUrl: './',
  fileExclusionRegExp: /^(r|build)\.js|.*\.scss$/,
  modules: [
    { name: 'index'}
  ],
  paths: {
    zepto: '../js/lib/zepto/zepto'
  }
})
