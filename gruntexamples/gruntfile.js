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
