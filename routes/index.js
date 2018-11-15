const vueClass = require('./vue-class/');
const newVue = require('./new-vue/');
module.exports = function(app) {
	app.use(vueClass.routes());
	app.use(newVue.routes());
}