const route = require('koa-router')();
const newVue = require('../../controller/multi-components-vue');
route.get('/multi-components-vue', newVue);

module.exports = route;