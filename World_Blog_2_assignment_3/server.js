var http = require('http');
var fs = require('fs');
var path = require('path');
var index;
var postList;
var commentList;
var deleteList;

function saveIndex(value){
	index = value;
}

function getNewIndex(){
	var index = getCurrentIndex()
	index++;
	saveIndex(index);
	return index;
}

function getCurrentIndex(){
	var value = index;
	
	if(index == null || index == "")
	{
		saveIndex(0);
	}
	else
	{
		value = index;
		
	}
	return value;
}

function save(item)
{
	var blogType;
	if((item.identity == "min") || (item.identity == "max"))
	{
		blogType = "postlist";
	}
	if(item.identity == "vis")		
	{
		blogType = "commentList";
	}
	if(item.identity == "delete")
	{
		blogType = "deleteList";
	}
	var bloglistArray = getBlogArray(blogType);
	bloglistArray.push(item);
	if(key=="postList"){postList= blogListArray;}
	if(key=="commentList"){commentList= blogListArray;}
	if(key=="deleteList"){ deleteList= blogListArray;}

function loadPostList()
{
	var postlistArray = getSavedPosts();
	if(postlistArray != null)
	{
		
		for(var i = postlistArray.length - 1; i >= 1; i--)
		{
			append(postlistArray[i]);
		}
	}
}

function loadCommentList()
{
	var commentListArray = getSavedComments();
	if(commentListArray != null)
	{
		for(var i = commentListArray.length - 1; i >= 1; i--)
		{
			append(commentListArray[i]);
		}
	}
}

function loadDeleteList()
{
	var deleteListArray = getSavedDeletes();
	if(deleteListArray != null)
	{
		for(var i = deleteListArray.length - 1; i >= 1; i--)
		{
			append(deleteListArray[i]);
		}
	}
}

function getSavedPosts()
{
	return getBlogArray("postlist");
}

function getSavedComments()
{
	return getBlogArray("commentList");
}

function getSavedDeletes()
{
	return getBlogArray("deleteList");
}


function getBlogArray(key)
{
	/*
	  var blogListArray= new Array();
	  localStorage.setItem(key, JSON.stringify(blogListArray));
	 */
	
	var blogListArray;
	if(key=="postList"){blogListArray= postList;}
	if(key=="commentList"){blogListArray= commentList;}
	if(key=="deleteList"){blogListArray= deleteList;}
	if(blogListArray == null || blogListArray == ""|| blogListArray[0]==null)
	{
		blogListArray = new Array();
	}
	
	return blogListArray;
}

/*
 * Actual Server Stuff
 */
http.createServer(function (request, response) {
    console.log('request starting...');
	
	var filePath = '.' + request.url;
	if (filePath == './')
		filePath = './index.html';
		
	var extname = path.extname(filePath);
	var contentType = 'text/html';
	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
	}
	
	path.exists(filePath, function(exists) {
	
		if (exists) {
			fs.readFile(filePath, function(error, content) {
				if (error) {
					response.writeHead(500);
					response.end();
				}
				else {
					response.writeHead(200, { 'Content-Type': contentType });
					response.end(content, 'utf-8');
				}
			});
		}
		else {
			response.writeHead(404);
			response.end();
		}
	});
	
}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');