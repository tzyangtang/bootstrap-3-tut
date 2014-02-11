module.exports = function(grunt) {

 grunt.initConfig({
  nggettext_extract: {
    pot: {
      files: {
        'po/template.pot': ['*.html','app/partials/*.html']
      }
    },
  },
})

  grunt.loadNpmTasks('grunt-angular-gettext');
  
  grunt.registerTask('default', ['nggettext_extract']);

};