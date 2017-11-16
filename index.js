$(document).on("pagecreate","#pageone",function(){
  $('#random').on("click", function(){
    submitText();
  });            
});            


function random() {
	return !Math.round(Math.random());
}

function submitText() {

    alert(random());
    
}