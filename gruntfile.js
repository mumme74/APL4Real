/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


module.exports = function (grunt) {

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
                        'src/js/larareKontaktController.js',
                        'src/js/larareKontaktService.js',
                        'src/js/kommentarController.js',
                        'src/js/kommentarService.js',
                        'src/js/elevSeMomentController.js',
                        'src/js/elevSeMomentService.js',
                        'src/js/aktivitetController.js',
                        'src/js/momentManager.js',
                        'src/js/momentService.js',
                        'src/js/elevKontaktController.js',
                        'src/js/elevKontaktService.js',
                        'src/js/hlKontaktController.js',
                        'src/js/hlKontaktService.js',
                        'src/js/larareSeNarvaroController.js',
                        'src/js/larareSeNarvaroService.js',
                        'src/js/redigeraAnvController.js',
                        'src/js/redigeraAnvService.js',
                        'src/js/larareTilldelaMomentController.js',
                        'src/js/larareService.js'
                        
                        
                    ]
                }
            }
        }, //end uglify
        copy: {
            all: {
                files: [
                    {src: 'index.html', dest: 'build/index.html'},
                    {src: 'icon.ico', dest: 'build/icon.ico'},
                    {src: 'templates/**', dest: 'build/'},
                    {src: 'css/**', dest: 'build/'},
                    {src: 'js/**', dest: 'build/'},
                    {src: 'bower_components/**', dest: 'build/'}

                ]
            }
        }, //end copy
        "ftp-deploy": {
            build: {
                auth: {
                    host: '10.97.72.5',
                    port: 21,
                    authKey: 'labbserver'
                },
                src: 'build/',
                dest: 'frontend/'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //copy tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    //ftp task
     grunt.loadNpmTasks('grunt-ftp-deploy');
    


    // Default task(s).
    grunt.registerTask('build', ['uglify']);
    //Send to server
    grunt.registerTask('deploy', ['copy','ftp-deploy']);

};
