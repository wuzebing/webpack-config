var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项

  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    //path: __dirname + "/public",//打包后的文件存放的地方
    path: __dirname + "/build",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },

 module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'//在webpack的module部分的loaders里进行配置即可
      },
      {
        test: /\.css$/,
        //loader: 'style-loader!css-loader'//添加对样式表的处理,
        //loader: 'style-loader!css-loader?modules'//跟前面相比就在后面加上了?modules,
        loader: 'style-loader!css-loader?modules!postcss-loader'
      
      }
    ]
  },

//webpack 已经不这么配置了，详情看http://www.imooc.com/qadetail/218339?lastmedia=1
 // postcss: [
 //    require('autoprefixer')//调用autoprefixer插件
 //  ],

plugins: [
    new webpack.HotModuleReplacementPlugin(),//热加载插件
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    })
     
  ],
  

// plugins: [
//     new webpack.BannerPlugin("Copyright Flying Unicorns inc.")//在这个数组中new一个就可以了
   
//   ],

  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    // colors: true,//终端中输出结果为彩色  (有问题)
    port:8089,
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } 
}