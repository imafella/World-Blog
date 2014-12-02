window.onload = function()
{
	var check = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);
	var file = null;
	
	if(check == "syria.html")
	{
		file = "../SaveData/syria.txt";
	}
	else if (check == "egypt.html")
	{
		file = "../SaveData/egypt.txt";
	}
	else if (check == "palestine.html")
	{
		file = "../SaveData/palestine.txt";
	}
	else
	{
		file = "../SaveData/iraq.txt";
	}
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				var allText = rawFile.responseText;
				post(allText);
				
			}
		}
	}
	rawFile.send();
	
    post(allText);
	
}

// This function will post all the text needed
function post(allText)
{
	// Here we need to find out who is doing the post? and work with it. 
	var stringArray = allText.split("*&!@*");
	
	for(var i = 0; i< stringArray.length-1; i++)
	{
		//alert("The " + i + " value in the string is " + stringArray[i]);
		if(stringArray[i].substring(0,7) == "nateDog")
		{
			var nameValue = "nateDog";
			var text = stringArray[i].substring(9, stringArray[i].length);
			createBlogger(nameValue, text);
		}
		else if (stringArray[i].substring(0,15) == "freedomWriter01")
		{
			var nameValue = "freedomWriter01";
			var text = stringArray[i].substring(17, stringArray[i].length);
			createBlogger(nameValue, text);
		}
		else
		{
			// This is the commenter section
			var nameValue = stringArray[i].substring(10, stringArray[i].indexOf(":", 10));
			if(nameValue == "")
			{
				nameValue = "Anonymous";
			}
			var text = stringArray[i].substring(stringArray[i].indexOf(":", 10)+1, stringArray[i].length);
			createCommenter(nameValue, text);
		}
	}	
}



// Need to remove the form aspect there is no need!
function createBlogger(nameValue,textValue) 
{
	
	var mainDiv = document.getElementById("blogging");
	var img = document.createElement("img");
	img.setAttribute("alt", "a profile picture");
	img.setAttribute("width", "64");
	img.setAttribute("height", "48");
	var div = document.createElement("div");
	var p1 = document.createElement("p"); // Hold img
    var p2 = document.createElement("p"); // Hold textValue
    var br = document.createElement("br");
	var em = document.createElement("em");
	em.setAttribute("class", "profileNames");
	if (nameValue == "nateDog")
	{
	  img.setAttribute("src", "../profile_image/njf514.png");
	  div.setAttribute("class", "against");
	  em.innerHTML = "NateDog";
	}
	else // FreedomWriter01
	{
		img.setAttribute("src", "../profile_image/freedom.png");
		em.innerHTML = "FreedomWriter01";
		div.setAttribute("class", "for");		
	}
	p1.appendChild(img);
	p1.appendChild(br);
	p1.appendChild(em);
	p2.innerHTML = textValue;
	div.appendChild(p1);
	div.appendChild(p2);	
	mainDiv.insertBefore(div, mainDiv.firstChild);
}

function createCommenter(nameValue, textValue)
{
	 var p = document.createElement("p");
     var em = document.createElement("em");
	 var span = document.createElement("span"); 
	 em.innerHTML = nameValue;
	 span.innerHTML = ": " + textValue;
	 p.appendChild(em);
	 p.appendChild(span);
	 var div = document.getElementById("indivualComs");
	 div.insertBefore(p, div.firstChild);

}


	
	
	
	
	
	
