process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

module.exports = environment.toWebpackConfig().merge({
    performance: {
        hints: 'error',
        maxAssetSize: 3000000000, // 整数类型（以字节为单位）
        maxEntrypointSize: 50000000 // 整数类型（以字节为单位）
    }
})
