// webpack.config.js
module.exports = {
  // Otras configuraciones...
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset/resource' // Reemplaza file-loader con asset/resource
      }
      // Otras reglas...
    ]
  }
};
  