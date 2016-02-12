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
                        'src/js/globalVars.js',
                        'src/js/configAngular.js',
                        'src/js/globalService.js',
                        'src/js/loginService.js',
                        'src/js/loginController.js',
                        'src/js/logoutController.js',
                        'src/js/handledareRegController.js',
                        'src/js/registrationController.js',
                        'src/js/registrationService.js',
                        'src/js/larareController.js',
                        'src/js/elevController.js',
                        'src/js/handledareController.js',
                        'src/js/getService.js',
                        'src/js/postService.js',
                        'src/js/elevSeLoggbokController.js',
                        'src/js/elevSeLoggbokService.js',
                        'src/js/narvaroService.js',
                        'src/js/larareSeLoggbokController.js',
                        'src/js/larareSeLoggbokService.js',
                        'src/js/ng.js',
                        'src/js/elevSeMomentController.js',
                        'src/js/elevSeMomentService.js'
                    ]
                }
            }
        } //end uglify

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('build', ['uglify']);

};
