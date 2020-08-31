// 设置表结构（集合）规则
//获取数据库里的Schema的属性
// mongoose.Schema 的属性 结构对象获取方法

const {Schema} = require('../conn/index')


//后台用管理集合
module.exports = new Schema({
 username:{
  type:String,
  required:true,
  minlength:2
 },
 password:{
   type:String,
   required:true,
   minlength:2,
 },
 nickname:String
})