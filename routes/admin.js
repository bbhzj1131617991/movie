const express = require('express')
const router = express.Router()
//登陆模块所在的路径
const LoginController = require('../controller/loginController')
//后台管理模块
const IndexController = require('../controller/indexController')
//热映管理
const HotController = require('../controller/hotController')



//通过路由来引入 登陆模块        index login 是方法 
router.get('/login', LoginController.index)
//登陆请求处理
router.post('/login', LoginController.login)
//防止用户翻墙
router.use(LoginController.isLogin)

//后台首页
router.get('/index',IndexController.index)
//用户退出
router.get('/logout',IndexController.logout)
//后台页面欢迎
router.get('/welcome',IndexController.welcome)
//热映管理
router.get('/hot/create',HotController.create)
//添加热映处理
// router.post('/hot/stor',HotController.create)




 //导出这个模块 在主函数（模块）中有使用 
module.exports = router;