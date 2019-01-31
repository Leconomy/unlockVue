Vue.component('inner', {
	data: function() {
		return {
			text: 'inner内部文本'
		};
	},
	template: '<div class="inner">{{text}}</div>'
});
var data = {};
Object.defineProperty(data, 'message', {
	value: '111',
	configurable: false
});
// Object.defineProperty(obj, key, {
//     value: val,
//     enumerable: !!enumerable,
//     writable: true,
//     configurable: true
//   });
console.log(data);
var app = new Vue({
	el: '#app',
	// data: data,
	data: {
		message: {
			txt: 'observe监听'
		}
	},
	template: `
		<section>
			<h2>{{message.txt}}</h2>
			<inner></inner>
			<a @click.prevent="handleClick" href="">更新数据</a>
			<a @click.prevent="handle" href="">set更新</a>
		</section>
	`,
	methods: {
		handleClick() {
			// this.message = this.message === 'observe监听' ? '更新后的observe监听' : 'observe监听';
		},
		handle() {
			this.$set(this.message, 'a', 'set更新');
		}
	}
});