module.exports = async (ctx) => {
	await ctx.render('observe', {
		title: 'observe逻辑',
		page: 'observe'
	});
}