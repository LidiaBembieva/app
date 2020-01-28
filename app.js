const Koa = require('koa');

const app = module.exports = new Koa();

// custom 401 handling

app.use(async function(ctx, next) {
  ctx.body = "hello world";
});

app.listen(3000);