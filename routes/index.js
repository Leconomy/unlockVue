const vueClass = require('./vue-class/');
const newVue = require('./new-vue/');
const multiComponentsVue = require('./multi-components-vue');
const functionalComponent = require('./functional-component');
module.exports = function(app) {
	app.use(vueClass.routes());
	app.use(newVue.routes());
	app.use(multiComponentsVue.routes());
	app.use(functionalComponent.routes());
}