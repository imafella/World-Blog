/**
 *  THis erdcytuvbionjkm
 */

function deleteButton(id)
{

    deleteComment(id);
    
}

function deleteComment(id){
	var done=checkPost(id);
	if(done!=true){checkComment(id);}
	window.location.reload();
	
}

function checkPost(id){
	var postsArray= getSavedPosts();	
	for(var i =postsArray.length-1; i>-1 ;i--){
		if((postsArray[i].stamp!=null) && (id==postsArray[i].stamp)){
			
			postsArray[i].identity= "delete";
			save(postsArray[i]);
			
			postsArray.splice(i, 1);
			localStorage.setItem("postlist", JSON.stringify(postsArray));
			return true
			
		}
	}
}

function checkComment(id){
	var commentArray= getSavedComments();
	for(var i =commentArray.length-1; i>-1 ;i--){
		if((commentArray[i].stamp!=null) && (id==commentArray[i].stamp)){
			commentArray[i].identity= "delete";
			save(commentArray[i]);
			
			commentArray.splice(i, 1);
			localStorage.setItem("commentList", JSON.stringify(commentArray));
			
		}
	}
}
