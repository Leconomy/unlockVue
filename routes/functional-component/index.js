const route = require('koa-router')();
const newVue = require('../../controller/functional-component');
route.get('/functional-component', newVue);

module.exports = route;