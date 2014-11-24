var path = require('path');
function route(handle, filepath, response) 
{
	// Check to make sure that the file path exists!
	console.log("About to route a request for " + filepath);
	var extname = path.extname(filepath);
	
	// Not sure if this should be in this file
	var contentType = 'text/html';
	switch(extname) 
	{
	case '.js':
		contentType = 'text/javascript';
		break;
	case '.css':
		contentType = 'text/css';
		break;
	
	}
	
	// Now we check to see if the path exists 
	
	path.exists(filepath, function(exists) 
	{
		if(exists)
		{
			// Now we sent this to the requestHandler
			// need to also send the contentType!!
			handle['/'](response, contentType, filepath);
			
		}
		else
		{
			console.log("No request handler found for " + filepath);
			response.writeHead(404, {"Content-Type": "text/plain"});
			response.write("Error 404-File Not found");
			response.end();
		}
			
	});
}

exports.route = route;