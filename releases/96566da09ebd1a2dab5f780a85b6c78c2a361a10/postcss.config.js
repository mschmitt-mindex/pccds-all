module.exports = {
    plugins: [
        require('postcss-critical-css')({ preserve: false, minify: true, outputPath: 'templates/_critcss' }),
    ],
}