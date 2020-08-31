//登陆模块

//引入用户模块  里面包含 查询用户账户密码是否匹配的函数  返回的是一个对象 里面包括查询的函数
const userModel = require('../dao/models/userModel')

//首页模块的逻辑

module.exports = {
  index(req,res){
    //通过模版引擎向页面相应   相应文件的路径 前面的路径已经在主文件中定义好 是在 views下的文件
    res.render('admin/login/index')
  },
  //用户登陆逻辑处理函数
  //async await处理promise可以让异步函数像同步函数一样执行
  async login(req,res){
    console.log(req.body);
    //  向查询函数传参 得到查询结果的返回值
      let ret = await userModel.checkUser(req.body)
      //登陆成返回的是成功之后的数据 也就是密码和用户名登陆  返回的如果是nall 证明查询结果是nall
        //判断是否登陆成功
        console.log(ret);
        if(!ret){
              //登陆失败将失败的页面加载过来渲染    模版引擎向页面传参数
          return res.render('admin/login/msg',{msg:'用户名或密码错误'})
        }else{
          //将登陆成功的用户名写入到session  ret是一个变量存储的是一个对象 也就是获取到的用户名和密码
          req.session.username = ret.username
          req.session.nickname = ret.nickname
          res.redirect('/admin/index')
        }
  },
    //判断用户是否登陆防止用户翻墙
  isLogin(req,res,next){
    //判断session是否为空 如果是空证明用户没有登陆
    if(!req.session.username){
      res.render('admin/login/msg', { msg: '请先登录' })
    }else{
      next()
    }

  }
}