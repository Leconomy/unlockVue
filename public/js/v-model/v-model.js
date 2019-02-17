new Vue({
	el: '#app',
	data: {
		message: 'hello world!'
	},
	template: '<div><h2>{{message}}</h2><input v-model.lazy="message"></div>'
});