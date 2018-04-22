var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
	fs.appendFile('first.txt','hello ashish',function(err){				
		res.writeHead(200,{'content-type':'text/html'});
		if(err)throw err;
		console.log('saved');
         res.end();		
		});
}).listen(8080);
