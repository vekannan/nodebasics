module.exports = function(grunt){
  grunt.initConfig({
    concat: {
      css:{
        src : ['./src/css/style1.css'],
        dest : './res/css/styles.css',
      },
      js:{
        src : ['./src/js/startJs.js'],
        dest : './res/js/scripts.js',
      },
    },
    watch: {
      js: {
        files: ['./src/**/*.js'],
        tasks: ['concat:js'],
        options: {
        // Start another live reload server on port 1337
          livereload: true,
        },
      },
      css: {
        files: ['./src/**/*.css'],
        tasks: ['concat:css'],
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['concat','watch']);
};
