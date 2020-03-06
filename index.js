const hostName = require('./libs/getIPAdress');
const port = 80;

const fs = require('fs');
const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const routes = require('./router').routes();

const app = new Koa();

/* 首页 */
const index = router
    .get('/', ctx => {
        ctx.body = 'hello world';
    })
    .routes();

app.use(index);
app.use(bodyParser());
app.use(routes);

/* 登录 */
const login = router
    .get('/login', ctx => {
        ctx.type = 'html';
        ctx.body = fs.createReadStream('./demos/login.html');
    })
    .routes();
app.use(login);

app.listen(port, hostName, () => {
    console.log(`服务运行在http://${hostName}:${port}`);
});

console.log('成功启动');
