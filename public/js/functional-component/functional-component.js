Vue.component('my', {
	functional: true,
	// props: {
	// 	name: {
	// 		type: String,
	// 		default: ''
	// 	}
	// },
	data: function() {
		return {
			test: 1
		}
	},
	render: function(createElement, context) {
		// console.log(this)
		// console.log(context.listeners, context.data, context.children);
		return createElement('section', context.data, ['我的函数式组件', context._v(context.props.name)])
	}
})
Vue.component('my1', {
	data: function() {
		return {
			test: 1
		}
	},
	render: function(createElement) {
		// console.log(this);
		return createElement('article', {}, [this._v(this.test)])
	}
})
var app = new Vue({
	el: '#app',
	methods: {
		handleClick: function() {
			alert('点击锚点');
		}
	},
	data: {
		app: 'app'
	},
	template: '<div><my name="函数式组件" @click="handleClick"></my><my1></my1></div>'
});