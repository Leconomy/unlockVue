module.exports = async (ctx) => {
	await ctx.render('parse', {
		title: '编译逻辑',
		page: 'parse'
	});
}