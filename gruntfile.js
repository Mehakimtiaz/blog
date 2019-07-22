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
    cssmin: {
      target: {
        files: [{
            expand: true,
            cwd: '<%= buildDistribution %>',
            src: ['**/*.css'],
            dest: '<%= buildDistribution %>'
        }]
    }
      }
});
//load plugins
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-cssmin');

grunt.registerTask('concat-css',['concat:css']);
grunt.registerTask('cssmin-css',['cssmin:css']);
grunt.registerTask('all',['concat-css','cssmin-css']);
//regiter tasks
//regiter tasks

};