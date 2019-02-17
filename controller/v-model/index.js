module.exports = async (ctx) => {
	await ctx.render('v-model', {
		title: 'v-model逻辑',
		page: 'v-model'
	});
}