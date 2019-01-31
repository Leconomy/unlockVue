const route = require('koa-router')();
const observe = require('../../controller/observe');
route.get('/observe', observe);

module.exports = route;