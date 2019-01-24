module.exports = async (ctx) => {
	await ctx.render('functional-component', {
		title: '函数式组件',
		page: 'functional-component'
	});
}