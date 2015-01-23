$(document).ready(function(){
$(".box").eq(0).click(function (event) {
  event.preventDefault();
  $(this).css("background-color", "blue");

});

$(".box select").eq(1).change(function (){ //doesnt need prevent default because there isn't a default action associated with HTML element
  $(this).closest(".box").css("background-color", "green");

});

$(".box").eq(2).dblclick(function(event) {
  event.preventDefault();
  $(this).css({"transform": "scale(2.5)", "background-color": "black"});

});

 $(".box").eq(3).hover(function(event) { //mouseover automatic with hover
  event.preventDefault();
  $(this).css("transform", "scale(0.5)");
}, function(event) {      //mouseout automatic when added to hover function?
  $(this).css("transform", "scale(1.5)");
}

);

$(".box").eq(4).hover(function(event) { //mouseover
  event.preventDefault();
  $(this).css("opacity", "(0.5)");
}, function(event) {      //mouseout
  $(this).css("opacity", "(1.0)");
}

);

$(".box").eq(5).on("click mouseout", function() {
  console.log("hi ya'll");
});














});

//
