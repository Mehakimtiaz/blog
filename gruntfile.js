module.exports=function(grunt){
//configurations
grunt.initConfig({ 
    //options to plugins erfernces to files
    concat:{
        css:{
            src:['src/css/*.css'],
            dest:'build/styles.css'
        }
    },
    uglify: {
        my_target: {
          files: {
            'dest/output.min.js': ['src/js/index.js', 'src/js/contact_me.js']
          }
        }
      },
      copy: {
        main: {
          expand: true,
          src: 'src/*',
          dest: 'dest2/',
        },
      },
    cssmin: {
      target: {
        files: [{
            expand: true,
            src:['src/css/*.css'],
            dest:'build/styles2.css'
        }]
    }
      },
      clean: {
        build: {
          src: ['build/styles.css', 'dest/output.min.js']
        }
      }
});
//load plugins
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-copy');

grunt.registerTask('clean-build',['clean:build']);
grunt.registerTask('copy-main',['copy:main']);
grunt.registerTask('concat-css',['concat:css']);
grunt.registerTask('cssmin-css',['cssmin:target']);
grunt.registerTask('uglify-js',['uglify:my_target']);
grunt.registerTask('all',['concat-css','uglify-js','cssmin-css','copy-main']);
//regiter tasks


};