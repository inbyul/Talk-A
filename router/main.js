module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/talk',function(req,res) {
        res.render('talk.html')
     });
      app.get('/register',function(req,res) {
        res.render('register.html')
      });
      app.get('/talk',function(req,res) {
        res.render('talk.html')
      });
      app.get('/close',function(req,res) {
        res.render('close.html')
      });
      app.get('/admin',function(req,res) {
        res.render('secret.html')
      })
}