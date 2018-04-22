var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
fs.unlink('first.txt',function(err){
res.writeHead(200,{'content-type':'text/html'});
if(err)throw err;
    console.log("delete successfully");
     res.end();
       });
}).listen(8080);
