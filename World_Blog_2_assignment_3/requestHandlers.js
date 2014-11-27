
var querystring = require("querystring"),
	fs = require("fs");


function start(response,contentType,filepath)
{
	console.log("Request handler 'start' was called.");
	fs.readFile(filepath, function(error, content)
			{
				if(error) 
				{
					response.writeHead(500);
					response.end();
				}
				else
				{
					response.writeHead(200, {'Content-Type': contentType});
					response.end(content, 'utf-8');
				}
				
			});
}
/*
function upload(response)

{
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("You've sent the text: " + querystring.parse(postData).text);
	response.end();
	
}

function show(response) 
{

	console.log("Request handler 'show' was called.");
	response.writeHead(200, {"Content-Type": "image/png"});
	fs.createReadStream("tmp/test.png").pipe(response);
}
*/
exports.start = start;
/*
exports.upload = upload;
exports.show = show;
*/

