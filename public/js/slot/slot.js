Vue.component('test', {
	template: '<div>测试<slot>hao</slot></div>'
});

new Vue({
	el: '#app',
	data: {
		message: 'hello world!'
	},
	template: '<test><a href="http://www.so.com">360搜索</a></test>'
});