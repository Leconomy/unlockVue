module.exports = async function(ctx, next) {
	await ctx.render('app', {
		title: 'vue-class实现流程',
		page: 'vue-class'
	});
}