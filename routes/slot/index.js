const route = require('koa-router')();
const slot = require('../../controller/slot');
route.get('/slot', slot);

module.exports = route;