const express = require('express')
const path = require('path')
//poet请求模块
const bodyParser = require('body-parser')
//session模块
const cookieSession = require('cookie-session')


const app = express()
app.listen(8080)
//中间件中定义哭泣 session
app.use(cookieSession({
  name:'sessiomId',
  secret:'vbjsbvkjsbvksbn',
  maxAge:30*60*1000
}))
//静态资源托管
app.use(express.static('public'))
// post接受处理
 app.use(bodyParser.urlencoded({ extended: false }))


//配置模版引擎        直接获取这个模块
app.engine('html', require('express-art-template'))
// 指定视图模板的路径
app.set('views', path.join(__dirname, 'views'))
// 指定模板引擎的默认扩展名，设置后，在render方法就可以省略不用写扩展名
app.set('view engine', 'html')

// 引入后台路由 后台路由有一个url访问前缀 /admin
app.use('/admin', require('./routes/admin'))

//404设置
app.use((req,res)=>{
  res.status(404).send('页面丢失')
})