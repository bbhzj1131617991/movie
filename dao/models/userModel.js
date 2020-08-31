//操作表结构


//获取mongoose里面的方法
const {model} = require('../conn/index')
//获取表结构设置的规则
const userSchema = require('../schema/userSchema')

//es6 定义类

class userModel {
    constructor(){
      //生成类成员
      this.model = model('User',userSchema,'users')
    }
    checkUser({username,password}){
      return this.model.findOne({username,password})
    }

}

module.exports = new userModel