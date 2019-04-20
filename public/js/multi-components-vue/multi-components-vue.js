Vue.component('name', {
	data: function() {
		return {
			message: '测试'
		};
	},
	methods: {
		handleClick() {
			console.log(2);
		}
	},
	template: '<div class="inner" @click="handleClick">{{message}}</div>'
})
var app = new Vue({
	el: '#app',
	template: '<name></name>'
});