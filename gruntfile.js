module.exports = function(grunt) {
    var sourceDir = 'js_src',
        gruntTempDir = '',
        gruntOutputDir = 'js',
        libPath = '../JS-framework';
    
    // Project configuration.
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
        resolve: {
            files: [ sourceDir+"/app.js" ],
            dist:gruntOutputDir
        },
        watch:{
            dev:{
                files: ['*.src.html',sourceDir+'/*.js', sourceDir+'/**/*.js', libPath+'/*.js', libPath+'/**/*.js'],
                tasks: ['default'],
                options: {
                    spawn: true,
                },
            }
        },
        workflow:{
            data: [{
                dev:true,
                //local:true,
                input:'index.src.html',
                output:'index.html',
                src:[
                    { path:'js_src', name:'' },
                    { path:'../JS-framework/src', name:'fw' },
                ],
                process:[],
                js_dest:'js'
            }],
        },
        convert3ds:{
            standard:{
                input:'models/exports',
                output:'assets'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-resolve');
    grunt.loadNpmTasks('grunt-workflow');
    grunt.loadNpmTasks('grunt-convert3ds');

    // Default task(s).
    grunt.registerTask('default', ['workflow']);
    grunt.registerTask('watch-dev', ['watch:dev'] );
    
    grunt.registerTask('conv3ds', ['convert3ds:standard'] );
    
    
};