var http = require("http");
var url = require("url");
// This was added

function start(route, handle) 
{

	function onRequest(request, response)
	{
	
		// This was added
		var filepath = '.' + request.url; // Now pass to the router
		var postData = ""; // For now we have an empty string
		
		//console.log("Request for " + filepath +  " Received");
		// Is the request portion needed
		// not sure what this is doing request.setEncoding("utf8");
		
		request.setEncoding("utf8"); // Sets encoding to utf-8888

		
		
		
		request.addListener("data", function(postDataChunk) 
		{ 
			postData += postDataChunk;
		});
		
		request.addListener("end", function() 
		{
			route(handle, filepath, response, postData);
		});
		
		
	}
		
	http.createServer(onRequest).listen(8888);

	console.log("Server has started");
}

exports.start = start;