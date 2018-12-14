module.exports = {
    options: {
        minify: true
    },
    target: {
        src: ['index.html', 'assets/js/*.js'],
        css: ['assets/css/*.css'],
        dest: 'assets/css/styles.min.css'
    },
};