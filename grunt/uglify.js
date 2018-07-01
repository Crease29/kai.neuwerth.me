module.exports = {
    widgets: {
        files: [
            {
                expand: true,
                src: "*.js",
                cwd: "build/js",
                dest: "assets/js",
                ext: ".min.js",
                extDot: "last"
            }
        ]
    }
};