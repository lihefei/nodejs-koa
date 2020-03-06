const Koa = require('koa');
const app = new Koa();

const hostName = require('./libs/getIPAdress');
const port = 80;

app.use(async ctx => {
    const url = ctx.url;

    /* 使用request获取get请求数据 */
    const request = ctx.request;
    const reqQuery = request.query;
    const reqQquerystring = request.querystring;

    /* 使用ctx获取get请求数据 */
    const query = ctx.query;
    const querystring = ctx.querystring;

    console.log('query: ', query);
    console.log('querystring: ', querystring);

    ctx.body = {
        url,
        reqQuery,
        reqQquerystring,
        query,
        querystring
    };
});

app.listen(port, hostName, () => {
    console.log(`服务器运行在http://${hostName}:${port}`);
});

console.log('成功启动');
