/**
 * Server
 */
var http = require("http");
http.createServer(function(request, response){
	require("./dispatcher").dispatch(request, response);
}).listen(1337);
console.log("Listening on port: " + 1337);