//操作表结构


// 设置表结构（集合）规则
//获取数据库里的Schema的属性
// mongoose.Schema 的属性 结构对象获取方法

const {Schema} = require('../conn/index')


//热映
module.exports = new Schema({
  //影片名称
 name:{
  type:String,
  required:true,
  minlength:2
 },
 //海报
 pic:String,
 //热度
 hot:Number,
 //上映事件年月日
 dt:String,
 //演员
 actor:String
 
})