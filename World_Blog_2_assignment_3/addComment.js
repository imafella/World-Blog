/**
 * This js adds comments like a boss. Always there when we need it.
 */

window.onload = init;



function post(identity, comment, userName, stamp)
{
	this.identity = identity;
	this.comment = comment;
	this.userName = userName;
	this.stamp= stamp;
}
function init(){
	var button = document.getElementById("addComment");
	button.onclick = getComment;
	loadPostList();
	loadCommentList();
	loadDeleteList();
	getCurrentIndex();
}

function getComment(e)
{
	var thePost = new post
	(
		document.getElementById("identity").value,
 		document.getElementById("comment").value,
		document.getElementById("backUp").value,
		getNewIndex()

	);
	addComment(thePost);
}

function addComment(blog)
{
	if(blog.identity == "min")
	{
		blog.userName = "Minimus";
	}
	if(blog.identity == "max")
	{
		blog.userName = "Maximus";
	}
	
	
	save(blog);
	window.location.reload();
}

function append(item)
{

	var name = item.identity;
	var comment = item.comment;
	var back = item.userName;
	
	
	var div = document.createElement("div");
	if(name != "vis")
	{
		div.className = name;
	}
	if((name == "min") || (name == "max"))
	{
		var elem = document.createElement("img");
		elem.id = name;
		elem.src = "images/" + name + ".jpg";
		div.appendChild(elem);
	}
	
	var h2 = document.createElement("h2");
	h2.innerHTML = back;
	div.appendChild(h2);
	var p = document.createElement("p");
	p.innerHTML = comment;
	var pic = document.createElement("elem");
	div.appendChild(p);
	if(name != "delete")
	{
		var element = document.createElement("input");
		element.setAttribute("type", "submit");
	    element.setAttribute("value", "Delete Post");
	    element.setAttribute("id", item.stamp);
	    element.setAttribute("onclick", "deleteButton(this.id)");
	    div.appendChild(element);
	   
	    
	}



	
	
	if(name!="vis")
	{
		posts = document.getElementById("posts");
	}
	if(name=="vis")
	{
		posts= document.getElementById("comments");
	}
	if(name=="delete")
	{
		posts= document.getElementById("trash");
	}
	
	posts.appendChild(div);
}

	
/*
 * 
*/
