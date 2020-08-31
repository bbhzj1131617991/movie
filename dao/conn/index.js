const mongoose = require('mongoose')
//路径模块获取路径 本层路径 不包括本层的路径  拼接字符串
const path = require('path')
//写入和读取模块
const fs = require('fs')
//获取数据库配置文件
const { host, opts} = require('../../config/db')
//链接数据库
mongoose.connect(host,opts).catch(err=>{
  let logpath = path.join(path.delimiter(path.delimiter(__dirname)),'logs','conn.log')
  fs.appendFileSync(logpath,err)
})
//导出数据库
module.exports = mongoose