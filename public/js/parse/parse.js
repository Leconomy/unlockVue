
var app = new Vue({
	el: '#app',
	data: {
		message: '编译过程',
		list: [1, 2, 3]
	},
	template: `
		<section>
			<h2>{{message}}</h2>
			<a @click.prevent="handleClick" href="">事件</a>
			<ul>
				<li v-for="(item, index) in list" :key="index">{{item}}</li>
			</ul>
		</section>
	`,
	methods: {
		handleClick() {
			alert('点击');
		}
	}
});