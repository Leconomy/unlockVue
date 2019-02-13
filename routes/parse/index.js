const route = require('koa-router')();
const parse = require('../../controller/parse');
route.get('/parse', parse);

module.exports = route;