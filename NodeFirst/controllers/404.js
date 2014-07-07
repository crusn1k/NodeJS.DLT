/**
 * Error 404
 */
exports.process = function(request, response){
	response.writeHead(404, {'Content-Type': 'text/html'});
	response.write("Hagla re!");
	response.end();
};