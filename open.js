 var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){ 
 fs.open('first.txt','w',function(err,file){
 res.writeHead(200,{'content-type':'text/html'});
			if(err)throw err;
			console.log('successfully open');
			//res.write(file);
			res.end();
			});
}).listen(8080);			
			