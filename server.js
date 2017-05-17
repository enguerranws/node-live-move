var http = require('http'),
    express = require('express'),
    app = express(),
    fs = require('fs'),
    server = http.Server(app),
    io = require('socket.io').listen(server),
    pjson = require('./package.json'),
    publicDir =  __dirname + '/public',
    port = process.env.PORT || 5000;

function generateId()
{
    var text = "", possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
app.use(express.static('public'));
// Server conf / routes
// app.get("/", function (req, res) {
//   console.log('Request on : /');
//   res.sendFile(publicDir+"/index.html");
//   res.end();
// });
// Server launch
server.listen(port, function () {
	console.info(pjson.name +' is running on 127.0.0.1:'+port+' :)');

});


// Socket EVENTS
io.on('connection', function(socket){
  console.log('io.on(connection');
  socket.on('sendMove', function(aigVal){
      console.log(aigVal);
    	aigVal.aigX = aigVal.aigX;
    	aigVal.aigY = aigVal.aigY;
    	aigVal.aigZ = aigVal.aigZ * 15;
    	io.emit('getMove', aigVal);

  });

});
