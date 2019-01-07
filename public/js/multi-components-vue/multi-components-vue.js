Vue.component('name', {
	data: function() {
		return {
			message: '我是name的数据'
		};
	},
	props: {
		name: {
			type: String,
			default: ''
		}
	},
	template: '<div><span>{{message}}</span><br /><span>{{name}}</span></div>'
})
var app = new Vue({
	el: '#app',
	data: {
		message: 'hello world!',
		name: '我是app的name'
	}
});