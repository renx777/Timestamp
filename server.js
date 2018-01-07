
var express=require('express');

var app=express();





  app.get('/',function(req,res){
  res.sendFile( __dirname+ '/views/index.html' )
  
})

app.get('/:str',function(req,res){

   
    if(parseInt(req.params.str)){
        /* 
        -->if string passed is a unix timestamp
        -->convert it into natural date format
        -->out put unix and natural date
        */
        
        var options = {  year: 'numeric', month: 'long', day: 'numeric' };
        var natural  = new Date(parseInt(req.params.str)*1000).toLocaleDateString('en-US',options);
        
        var timestamp=parseInt(req.params.str)
        var output={unix:timestamp,natural:natural}
        res.send(output)
    }else{
        /* 
        -->if string passed is in natural date format
        -->convert it into unix timestamp 
        -->output values
        */
        console.log(req.params.str)

        var timestamp= Date.parse(req.params.str + " 00:00:00 GMT")/1000;

        var output={unix:timestamp,natural:req.params.str}
        res.send(output)

    }
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
