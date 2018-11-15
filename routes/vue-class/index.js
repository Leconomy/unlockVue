const route = require('koa-router')();
const vueClass = require('../../controller/vue-class');
route.get('/', vueClass);
route.get('/vue-class', vueClass);

module.exports = route;