const express = require('express');
const app = express();
const port = 3000;

//Setting View Engine/ Template Engine
app.set('view engine','pug');
app.set('views','./views');

app.get('/', function(req, res){
    res.render('home',{title : 'Pug Template'});
});

app.listen(port,function(err){
    if(err){
        console.log("error");
    }    
    console.log("No error");
});

