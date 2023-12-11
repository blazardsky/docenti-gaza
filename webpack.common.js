const path = require('path');

module.exports = {
  entry: {
    app: './js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/app.js',
  },
  performance: {
    // evito warning per i file zip
    assetFilter: function (assetFilename) {
      if(assetFilename.endsWith('.zip')){
        return false
      }
      return !/\.map$/.test(assetFilename);
    },
  },
};
