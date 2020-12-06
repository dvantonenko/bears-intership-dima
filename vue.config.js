module.exports = {
    devServer: {
        // proxy: 'http://localhost:3000',
        proxy: {
            "/": {
                target: "http://localhost:3000/",
                secure: false,
                changeOrigin: true
            }
        }
    }
}
