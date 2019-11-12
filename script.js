

var button= document.querySelector("button");

button.addEventListener("click", function(){
	button.classList.toggle("first");
})

button.addEventListener("mouseover", function(){
	button.style.borderColor="red";
	button.innerHTML="Stay on it";
})

button.addEventListener("mouseout", function(){
	button.innerHTML= "Come Here";
	button.style.borderColor="blue";

})

button.addEventListener("dblclick", function(){
	button.style.backgroundColor="green";
})

button.addEventListener("keypress", function(){
	button.classList.toggle("keypress");
})
