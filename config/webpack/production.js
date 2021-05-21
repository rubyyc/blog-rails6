process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

module.exports = environment.toWebpackConfig({
    performance: {
        hints: 'error',
        maxAssetSize: 300000, // 整数类型（以字节为单位）
        maxEntrypointSize: 500000 // 整数类型（以字节为单位）
    }
})
