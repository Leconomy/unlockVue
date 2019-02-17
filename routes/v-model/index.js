const route = require('koa-router')();
const vmodel = require('../../controller/v-model');
route.get('/v-model', vmodel);

module.exports = route;