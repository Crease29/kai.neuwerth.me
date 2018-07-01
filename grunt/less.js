module.exports = {
    options: {
        compress: true,
        yuicompress: true,
        optimization: 2,
        plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})
        ]
    },

    default: {
        files: {
            "assets/css/styles.min.css": "build/less/styles.less"
        }
    }
};