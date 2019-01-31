const vueClass = require('./vue-class/');
const newVue = require('./new-vue/');
const multiComponentsVue = require('./multi-components-vue');
const functionalComponent = require('./functional-component');
const observe = require('./observe');

module.exports = function(app) {
	[
		vueClass, 
		newVue, 
		multiComponentsVue, 
		functionalComponent, 
		observe
	].forEach((item) => {
		app.use(item.routes());
	});
}