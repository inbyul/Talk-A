module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/sans',function(req,res) {
        res.render('sans.html')
     });
}