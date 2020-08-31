//操作表结构


//获取mongoose里面的方法
const {model} = require('../conn/index')
//获取表结构设置的规则
const userSchema = require('../schema/hotSchema')

//es6 定义类

class hotModel {
    constructor(){
      //生成类成员
      this.model = model('Hot',hotSchema)
    }
    checkUser(data){
      return this.model.insertMany(data)
    }

}

module.exports = new userModel