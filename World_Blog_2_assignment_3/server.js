var http = require("http");
var url = require("url");
// This was added

function start(route, handle) 
{

	function onRequest(request, response)
	{
	
		// This was added
		var filepath = '.' + request.url; // Now pass to the router
		
		
		
		
		//var pathname = url.parse(request.url).pathname;
		
		console.log("Request for " + filepath +  " Received");
		// Is the request portion needed
		// not sure what this is doing request.setEncoding("utf8");
		
			
		
		
		/*request.addListener("data", function(postDataChunk) 
		{ 
			postData += postDataChunk;
			console.log("Received POST data chunk '"+ postDataChunk + "'.");
		});
		
		request.addListener("end", function() 
		{
			route(handle, pathname, response, postData);
		});
		*/
		
		// changed pathname to filepath
		route(handle, filepath, response);
		
	}
		
	http.createServer(onRequest).listen(8888);

	console.log("Server has started");
}

exports.start = start;