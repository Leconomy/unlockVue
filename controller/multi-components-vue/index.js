module.exports = async (ctx) => {
	await ctx.render('multi-components-vue', {
		title: '多组件逻辑',
		page: 'multi-components-vue'
	});
}