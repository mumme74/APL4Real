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
                beautify: false,
                compress: {
                    drop_console: false//true, //ta bort console.log
                }
            },
            aplapp: {
                files: {
                    'js/aplapp.min.js': [
                        'src/js/global/globalVars.js',
                        'src/js/global/configAngular.js',
                        'src/js/**/*.js'
                    ]
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
                      "js/**/*.map",
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
    grunt.registerTask('server', ['uglify', 'sync','express', 'watch']);

};
