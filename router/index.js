const router = require('koa-router')();
const userCtrl = require('../controller/users/user-controller');

router.prefix('/api'); //给所有路由加上前缀
router.post('/user/login', userCtrl.login).get('/user/userinfo', userCtrl.userInfo);
//.put(xxxx)
//.delete(xxxx)

module.exports = router;
