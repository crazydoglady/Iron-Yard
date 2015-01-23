$(document).ready(function() {

  $(".circle").eq(0).click(function (event) {
    event.preventDefault();
    $(this).removeClass("circle");
    $(this).addClass("square");
    $(this).html("Star Wars: A New Hope");
  });

  $(".square").eq(0).hover(function (event) {
        event.preventDefault();
        $(this).css("background", "red");
        $(this).html("The Congo");
        console.log("Answer: The congo")
  });

  $(".circle").eq(1).find("select").change(function () {
    console.log("Answer ? 2: Nicolas Cage");
    $(this).css("background", "url('http://www.placecage.com/200/200')");
    // $(this)--make the text disappear?;
  });

  $(".square").eq(1).dblclick(function(event) {
    event.preventDefault();
    $(this).html("Indonesia");
    $(this).css("Background", "white")
    console.log("Q3: Indonesia")
});

  $(".circle").eq(2).on("click mouseout" function() {
    event.preventDefault();
    $(this).html("John Lennon");
    console.log("Q4: John Lennon")
  });

  $(".square").eq(2).change(function (change) {
    event.preventDefault();
    $(this).css("background", "red");
    console.log("??")
  });
  $(".circle").eq(3).click(function (blur) {
    event.preventDefault();
    $(this).removeClass("circle");
    $(this).addClass("square");
  });

  $(".square").eq(3).mouseover(function (event) {
    $(this).css("opacity", ".5");
  });

  $(".circle").eq(4).on(function (keydown) {
    event.preventDefault();
    $(this).removeClass("circle");
    $(this).addClass("square");
  });

  $(".square").eq(4).keydown(function () {
    event.preventDefault();
    $(this).html("40, 'f-o-r-t-y'");
  });

  $("body").on("click","button", function () {
    $(this).siblings().css("background-color", "white");
  });







//pepper image from https://www.painscience.com/articles/palpatory-pareidolia.php")


















});
