module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/talk',function(req,res) {
        res.render('talk.html')
     });
}