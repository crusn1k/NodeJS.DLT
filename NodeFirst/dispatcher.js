/**
 * Dispatcher Dispatches the incoming requests to respective handlers.
 */

var url = require("url");
var fs = require('fs');

function getFile(request, response, path) {
	fs.readFile(__dirname + path, 'utf8', function(err, data) {
		if (err) {
			throw err;
		}
		response.write(data, 'utf8');
		response.end();
	});
}
exports.dispatch = function(request, response) {
	request.requrl = url.parse(request.url, true);
	var path = request.requrl.pathname;
	if (/.(css)$/.test(path)) {
		response.writeHead(200, {
			'Content-Type' : 'text/css'
		});
		getFile(request, response, path);
	} else if (/.(js)$/.test(path)) {
		response.writeHead(200, {
			'Content-Type' : 'text/javascript'
		});
		getFile(request, response, path);
	} else if (path === "/" || path === "/home") {
		require('./controllers/home').process(request, response);
	}else if (path === "/get-json"){
		require('./controllers/home').getJson(request, response);
	}
	else {
		require('./controllers/404').process(request, response);
	}

};