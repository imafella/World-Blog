
var querystring = require("querystring"),
	fs = require("fs");
// Not sure if this is going to stay!!	


// I could put a internal function here so we don't actually lose the path on the condition
// There is some postData
function start(response,contentType,filepath, postData) 
{	

	
    var testString = postData.trim();	
	if(testString.length != 0 && !testString.match(/(postContent=\+*$)/g)) 
	// Meaning that someone actually posted something of relevance.
	{
		
		post(postData, filepath);
	}
	
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



function post(postData, filepath)
{
	
	var saveFile = null; // Start off with nothing
	
	//Now we figure out what file to save it to
	
	if(filepath == "./events/palestine.html")
	{
		saveFile = "SaveData/palestine.txt";
	}
	else if(filepath == "./events/egypt.html")
	{
		saveFile = "SaveData/egypt.txt";
	}
	else if(filepath == "./events/iraq.html")
	{
		saveFile = "SaveData/iraq.txt";
	}
	else
	{
		saveFile = "SaveData/syria.txt";
	}
	console.log("Here is what you posted " + postData);
	// we are now going to break down postData to give three things if applicable 
	var section = querystring.parse(postData).Section;
	
	console.log("You Selected the section: " + section);
	
	var commenterName = querystring.parse(postData).CommentName;
	
	console.log("commenterName is: " + commenterName);
	
	var postContent = querystring.parse(postData).postContent;
	console.log("Here is the post: " + postContent);
	
	fs.appendFile(saveFile, section +":" + commenterName +":"+ postContent + "*&!@*" , function(err)
	{
		if (err)
		{
			console.log("It seems we have hit an error");
			throw err;
		}
		//console.log("Data has been appended y'all");
	});
}

exports.start = start;


