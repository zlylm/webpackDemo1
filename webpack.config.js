const path = require('path')

module.exports = {
    entry:{
        main:'./src/index.js',
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist'),
        library:'library',
        libraryTarget:'umd'
    },
    // devtool:'cheap-eval-source-map'
}