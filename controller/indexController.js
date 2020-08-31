// 欢迎页面管理
module.exports = {

  index(req, res) {
    res.render('admin/index/index')
  },
  logout(req,res){
    req.session.username = null
    res.redirect('/admin/login')
  },
  welcome(req,res){
    res.render('admin/index/welcome')
  }
}