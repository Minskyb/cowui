/**
 * Created by ASUS on 2016/6/29.
 */
module.exports = function(grunt){

	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		banner:'/**\n' +
		'*<%=pkg.name%> v <%=pkg.version%> *' +
		'*@author by <%=pkg.author%>*',
		clean:{
			dist:'dist'
		},
		cssmin:{
			dist:{
				files:[{
					expand:true,
					cwd:'dist',
					src:'*.css',
					dest:'dist',
					ext:'.min.css',
					extDot:'last'
				}]
			}
		},
		less:{
			// options: {
			// 	banner: '<%= banner %>',
			// },
			pro:{
				src: 'src/less/cowui.less',
				dest: 'dist/cowui.css'
			},
			dev: {
				options: {
					strictMath: true,
					sourceMap: true,
					outputSourceFiles: true,
					sourceMapURL: 'cowui.css.map',
					sourceMapFilename: 'dist/cowui.css.map'
				},
				src: 'src/less/cowui.less',
				dest: 'dist/cowui.css'
			}
			// compileTheme: {
			// 	options: {
			// 		strictMath: true,
			// 		sourceMap: true,
			// 		outputSourceFiles: true,
			// 		sourceMapURL: 'main-theme.css.map',
			// 		sourceMapFilename: 'www/css/main-theme.css.map'
			// 	},
			// 	src: 'www/less/theme.less',
			// 	dest: 'www/css/main-theme.css'
			// }
		},
        autoprefixer: {
            options: {
                // Task-specific options go here.
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            pro: {
                // Target-specific file lists and/or options go here.
                expand:true,
                cwd:'dist',
                src:'*.css',
                dest:'dist'
            }
        },
		watch: {
			less: {
				files: ['src/less/**/*.less'],
				tasks: ['clean','less','autoprefixer']
			}
		}
	});

	require('load-grunt-tasks')(grunt,{ scope: 'devDependencies' });

	grunt.registerTask('default',[
		'clean',
		'less:dev',
        'autoprefixer',
		'watch'
	]);

	grunt.registerTask('pro',[
		'clean',
		'less:pro',
        'autoprefixer',
		'cssmin'
	])

}

