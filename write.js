var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
fs.writeFile('first.txt','Hello Ashish',function(err){
res.writeHead(200,{'content-type':'text/html'});
			if(err)throw err;
           console.log("success");
		   res.end();
		   });
}).listen(8080);		   
		