/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
     uglify: {
            options: {
                mangle: false //behåll variabelnamn
            },
            aplapp: {
                files: {
                    'js/aplapp.min.js': [
                        'src/js/configAngular.js',
                        'src/js/loginService.js',
                        'src/js/loginController.js',
                        'src/js/registrationController.js'
                    ]
                }
            }
        }, //end uglify

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('build', ['uglify']);

};