var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.text());
app.use(bodyParser.json());

var writeInfo = function(req, res){
    res.write("\nHeaders:\n")
    if(JSON.stringify(req.headers) ==="{}"){
        res.write("**No headers passed in request**\n")
    }
    else{
        res.write(JSON.stringify(req.headers, null, '\t'));
        res.write('\n') //can't pass this as part of above or it will be interpreted weird
    }
    res.write("\nBody:\n")
    if(JSON.stringify(req.body) ==="{}"){
        res.write("**No body passed in request**\n")
    }
    else{
        res.write(JSON.stringify(req.body, null, '\t'));
        res.write('\n')
    }
    res.write("\nQuery Parameters:\n")
    
    
    if(JSON.stringify(req.query) ==="{}"){
        res.write("**No query parameters passed in request**\n")
    }
    else{
        res.write(JSON.stringify(req.query, null, '\t'));
        res.write('\n')
    }
}


app.post('/posts', function(req, res){
    console.log("POST SUCCEEDED");
    writeInfo(req, res);
    res.end("\nPOST processed succesfully\n");
});

app.put('/puts', function(req, res){
    console.log("PUT SUCCEEDED");
    writeInfo(req, res);
    res.end("\nPUT processed succesfully\n");
});

app.get('/gets', function(req, res){
    console.log("GET SUCCEEDED");
    writeInfo(req, res)
    res.end("\nGET processed succesfully\n");
});

app.delete('/deletes', function(req, res){
    console.log("DELETE SUCCEEDED");
    writeInfo(req, res)
    res.end("\nDELETE processed succesfully\n");
});

app.use(function(req, res, next){
    res.end('\n**That operation is not supported at the specified URN**\n');
});

app.listen(3000, function(){
    console.log("listening on port 3000");
});

