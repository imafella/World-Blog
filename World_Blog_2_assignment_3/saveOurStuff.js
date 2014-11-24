/**
 * A regular Captain planet, saving all the global stuff.
 */
var fs= require('fs');


function saveIndex(index){
	fs.writeFile('index.txt', index,function (err) {
	  if (err) throw err;
	  console.log('It\'s saved!');});
}
function getNewIndex(){
	var index = getCurrentIndex()
	index++;
	saveIndex(index);
	return index;
}

function getCurrentIndex(){
	var index = fs.readFile('index.txt', function (err, data) {
		  if (err) throw err;
		  console.log(index);
		});
	
	if(index == null || index == "")
	{
		index = 0;
	}
	else
	{
		index = JSON.parse(index);
		
	}
	return index;
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
	fs.writeFile(blogType+'.txt', JSON.stringify(blogListArray),function (err) {
		  if (err) throw err;
		  console.log('It\'s saved!');});
}

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
	
	
	var blogListArray = fs.readFile(key+'.txt', function (err, data) {
		  if (err) throw err;
		  console.log(key);
		});;
	if(blogListArray == null || blogListArray == "")
	{
		blogListArray = new Array();
	}
	else
	{
		blogListArray = JSON.parse(blogListArray);
		if(blogListArray[0] == null)
		{
			blogListArray = new Array();
		}
	}
	
	return blogListArray;
}