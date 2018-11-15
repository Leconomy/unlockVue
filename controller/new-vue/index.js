module.exports = async (ctx) => {
	await ctx.render('app', {
		title: 'new Vue逻辑',
		page: 'new-vue'
	});
}