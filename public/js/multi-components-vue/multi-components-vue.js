Vue.component('name', {
	data: function() {
		return {
			message: '测试'
		};
	},
	template: '<div class="inner">{{message}}</div>'
})
var app = new Vue({
	el: '#app'
});