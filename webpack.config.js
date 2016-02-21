module.exports = {
   entry : "./src/app.js",
   output : {
      filename : "./public/js/bundle.js"
   },
   watch : true,
   module:{
      loaders: [
            {
                test: /\.js$/,
               loaders: ['babel'],
                exclude: /node_modules/
            }
        ]
   },
   resolve:{
      extensions:["",".js",".jsx"]
   },
  query: {
        presets: ['es2015', 'react']
      }
}
