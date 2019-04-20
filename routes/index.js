const vueClass = require('./vue-class/');
const newVue = require('./new-vue/');
const multiComponentsVue = require('./multi-components-vue');
const functionalComponent = require('./functional-component');
const observe = require('./observe');
const parse = require('./parse');
const vmodel = require('./v-model');
const slot = require('./slot');

module.exports = function(app) {
	[
		vueClass, 
		newVue, 
		multiComponentsVue, 
		functionalComponent, 
		observe,
		parse,
		vmodel,
		slot
	].forEach((item) => {
		app.use(item.routes());
	});
}