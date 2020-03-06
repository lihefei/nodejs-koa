class UserController {
    /**
     * 用户登录
     */
    static async login(ctx, next) {
        let name = ctx.request.body.name || '',
            pswd = ctx.request.body.pswd || '';

        const server = {
            login(name, pswd) {
                if (name === 'test' && pswd === '123') {
                    return {
                        status: true,
                        token: 'xxxxxxxxxxxxxxxxxxxxxxxx'
                    };
                }

                return {
                    status: false,
                    token: '账号或密码错误'
                };
            }
        };

        ctx.body = server.login(name, pswd);

        // ctx.body = {
        //     status: true,
        //     token: '123'
        // };
    }

    /**
     * 用户信息
     */

    static async userInfo(ctx, next) {
        let data = {
            name: 'jk',
            age: 25
        };
        ctx.body = {
            status: true,
            data
        };
    }
}

module.exports = UserController;
