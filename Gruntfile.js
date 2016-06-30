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
			},
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
		watch: {
			less: {
				files: ['src/less/**/*.less'],
				tasks: ['clean','less']
			}
		}
	});

	require('load-grunt-tasks')(grunt,{ scope: 'devDependencies' });

	grunt.registerTask('default',[
		'clean',
		'less:dev',
		'watch'
	]);

	grunt.registerTask('pro',[
		'clean',
		'less:pro',
		'cssmin'
	])

}

