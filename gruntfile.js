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
                mangle: false, //behåll variabelnamn
                banner: "/* Built: <%= grunt.template.today() %> */",
                sourceMap: true, // makes dev tool find unmangled sources
                compress: {
                    drop_console: false//true, //ta bort console.log
                }
            },
            aplapp: {
                files: {
                  //  'js/aplapp.min.js': ["src/js/**/*.js"]
                                            /* GLOBAL */
                    'js/aplapp.min.js'    :['src/js/global/globalVars.js',
                        'src/js/global/configAngular.js',
                        'src/js/global/globalService.js',
                        'src/js/global/loginService.js',
                        'src/js/global/registrationService.js',
                        'src/js/global/loginController.js',
                        'src/js/global/logoutController.js',
                        'src/js/global/registrationController.js',
                        'src/js/global/kommentarController.js',
                        /* LÄRARE */
                        'src/js/larare/larareKontaktService.js',
                        'src/js/larare/larareMomentService.js',
                        'src/js/larare/larareNatverkService.js',
                        'src/js/larare/larareOversiktService.js',
                        'src/js/larare/larareRedigeraAnvService.js',
                        'src/js/larare/larareSeLoggbokService.js',
                        'src/js/larare/larareSeNarvaroService.js',
                        'src/js/larare/larareService.js',
                        'src/js/larare/larareController.js',
                        'src/js/larare/larareKontaktController.js',
                        'src/js/larare/larareMomentController.js',
                        'src/js/larare/larareNatverkController.js',
                        'src/js/larare/larareOversiktController.js',
                        'src/js/larare/larareRedigeraAnvController.js',
                        'src/js/larare/larareRegHandledareController.js',
                        'src/js/larare/larareSeLoggbokController.js',
                        'src/js/larare/larareSeNarvaroController.js',
                        'src/js/larare/larareTilldelaHandledareController.js',
                        'src/js/larare/larareTilldelaMomentController.js',
                        /* ELEV */
                        'src/js/elev/elevAktivitetService.js',
                        'src/js/elev/elevKontaktService.js',
                        'src/js/elev/elevLoggbokService.js',
                        'src/js/elev/elevSeLoggbokService.js',
                        'src/js/elev/elevSeMomentService.js',
                        'src/js/elev/elevSeNarvaroService.js',
                        'src/js/elev/elevController.js',
                        'src/js/elev/elevAktivitetController.js',
                        'src/js/elev/elevKontaktController.js',
                        'src/js/elev/elevLoggbokController.js',
                        'src/js/elev/elevNarvaroController.js',
                        'src/js/elev/elevSeLoggbokController.js',
                        'src/js/elev/elevSeMomentController.js',
                        'src/js/elev/elevSeNarvaroController.js',
                        /* HANDLEDARE */
                        'src/js/handledare/handledareAktivitetService.js',
                        'src/js/handledare/handledareKontaktService.js',
                        'src/js/handledare/handledareMomentService.js',
                        'src/js/handledare/handledareController.js',
                        'src/js/handledare/handledareAktivitetController.js',
                        'src/js/handledare/handledareKontaktController.js',
                        'src/js/handledare/handledareMomentController.js']
                }
            }
        }, //end uglify
        watch: {
            options: { livereload: true },
            js: {
                files: ["src/js/**/*.js"],
                tasks: ["uglify", "sync"]
            },
            css: {
                files: ["css/**/*.css"],
                tasks: ["sync"]
            },
            templates: {
                files: ["templates/**"],
                tasks: ["sync"]
            },
            htmFiles: {
                files: ["*.htm", "*.html"],
                tasks: ["sync"]
            }
        },
        express: {
          // starting a development webserver (autoreloads page when a file is changed)
          all: {
              options:{
                  livereload:true,
                  port: 9000,
                  bases: 'build/',
                  hostname: '*' // allow 127.0.0.1:9000
              }
          }  
        },
        sync: {
           main: {
               files: [
                   { src: [
                      "*.html", 
                      "*.htm",
                      "*.ico",
                      "css/**/*.css",
                      "js/**/*.js",
                      "templates/**",
                      "bower_components/**",
                      "src/**",
                      "BilderAPL/**"
                     ], 
                     dest: 'build/'
                    }
               ],
               verbose:true
           }
        },
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
    //sync tasks
    grunt.loadNpmTasks('grunt-sync');
    //ftp task
    grunt.loadNpmTasks('grunt-ftp-deploy');
    // watch for changes in filesystem
    grunt.loadNpmTasks('grunt-contrib-watch');
    // a automatic relaoding webserver
    grunt.loadNpmTasks('grunt-express');
    
    // Default task(s).
    grunt.registerTask('build', ['uglify']);
    //Send to server
    grunt.registerTask('deploy', ['sync','ftp-deploy']);
    
    // run as a dev server (autoreloads when files are saved)
    grunt.registerTask('server', ['sync','express', 'watch']);

};
