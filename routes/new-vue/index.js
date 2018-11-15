const route = require('koa-router')();
const newVue = require('../../controller/new-vue');
route.get('/new-vue', newVue);

module.exports = route;