module.exports = async (ctx) => {
	await ctx.render('slot', {
		title: 'slot逻辑',
		page: 'slot'
	});
}