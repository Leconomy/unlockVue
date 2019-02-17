const vueClass = require('./vue-class/');
const newVue = require('./new-vue/');
const multiComponentsVue = require('./multi-components-vue');
const functionalComponent = require('./functional-component');
const observe = require('./observe');
const parse = require('./parse');
const vmodel = require('./v-model');

module.exports = function(app) {
	[
		vueClass, 
		newVue, 
		multiComponentsVue, 
		functionalComponent, 
		observe,
		parse,
		vmodel
	].forEach((item) => {
		app.use(item.routes());
	});
}