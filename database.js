var http=require('http');
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/mydb";
http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/html'});	
	MongoClient.connect(url,function(err,db){
		if(err)throw err;
		var dbo=db.db("mydb");
		dbo.createCollection("customers",function(err,res){		
		if(err)throw err;
		console.log("collection Created");
		db.close();	
		});
	});
	res.end();
}).listen(8080);