window.onload= init;

function init() {
	
	var subButton = document.getElementById("addButton");
	subButton.onclick = handleSubmission;
	//var deleteButton = document.getElementsByClassName("deleteButton");
	//deleteButton.onclick = deleteProfileClick;
}

function handleSubmission() {
	var radioButton = whatRadioButton();
	var textfieldValue = document.getElementById("textfield").value;
	if(checkForText(textfieldValue)) // there is no textfieldValue
	{
		alert("Sorry you haven't written anything");
	}
	
	else{
	
	if(radioButton == null) {
		alert("Sorry you haven't picked a user try again.");
	}
	else if(radioButton == "nateDog" || radioButton == "freedomWriter01")
	{
		createBlogger(radioButton,textfieldValue); // This will do all the rest 
	}
	
	else
	{
		// Here we need to have alert and change the attribute of commenterName to take a value
		var commenterName = document.getElementById("commenterName").value; // Gets name value
		if(checkForText(commenterName))
		{
			alert("Please add your commenter name");
		}
		else
		{
			createCommenter(commenterName, textfieldValue);
		}
	}
	
}
}
// This method will find out what radio button is being used and also return the value
function whatRadioButton() {
	var form= document.getElementById("blogform");
	var valueSelected = null; // If nothing is find will stay null
	for(var i=0; i< form.user.length; i++)
	{
		
		if(form.user[i].checked) // check to see if a radio button has been checked
		{
			var valueSelected = form.user[i].value;
			break; // exits the loop
		}
	}
	
	return valueSelected;
}

// This will create the element using predefined profile

function createBlogger(nameValue,textValue) {
	
	
	var mainDiv = document.getElementById("blogging");
	
	var form = document.createElement("form");
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
	
	var input = document.createElement("form");
	input.setAttribute("type", "button");
	input.setAttribute("value", "Delete");
	input.setAttribute("class", "deleteButton");
	
	
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
	
	
	form.appendChild(p1);
	form.appendChild(p2);
	form.appendChild(input);
	
	div.appendChild(form);
	
	mainDiv.insertBefore(div, mainDiv.firstChild);
	
	


}

function createCommenter(nameValue, textValue)
{
	// Still needs map portion
	 alert("We are in the function");
	 var form = document.createElement("form");
	 // input button
	 var input = document.createElement("input");
	 input.setAttribute("type", "button");
	 input.setAttribute("value", "Delete");
	 input.setAttribute("class", "deleteButton");
	 var p = document.createElement("p");
     var em = document.createElement("em");
	 var span = document.createElement("span"); 
	 em.innerHTML = nameValue;
	 span.innerHTML = ": " + textValue;
	 p.appendChild(em);
	 p.appendChild(span);
	 form.appendChild(p);
	 form.appendChild(input);
	 var div = document.getElementById("indivualComs");
	 div.insertBefore(form, div.firstChild);

}


