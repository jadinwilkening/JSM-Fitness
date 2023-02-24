

// function changeTitle()
// {
// 	var x = document.getElementById("part1");
// 	x.innerHTML = "Hi!!";
// }

 var button = document.getElementsByTagName("button")[0];
// var count = 0;
// // selectedElem.addEventListener("event",actionPerformedFunc)
// button.addEventListener("mouseenter", function(){
// 	console.log("testing");
// 	count++;
// 	if(count >=3) console.log("new" + count)}
// )

// var title = document.getElementById("part1");
// title.addEventListener("mouseleave", changeTitle(),);

//try "click" "dbclick" "mouseover" "mouseleave"
button.addEventListener("click", function changeTitle()
{
	var x = document.getElementById("part1");
	//x.style.backgroundColor="yellow";
	x.innerHTML = "New Title";
	console.log("testing");
})
