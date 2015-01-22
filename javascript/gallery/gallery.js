$(document).ready(function() {
  var $album1 = $('nav a').eq(0);
  var $album2 = $('nav a').eq(1);
  var $album3 = $('nav a').eq(2);
  var $album4 = $('nav a').eq(3);
  var $album5 = $('nav a').eq(4);
  var $album6 = $('nav a').eq(5);



  $("nav a").click(function(event) {
    event.preventDefault();
    var relatedClass = "." + $(this).attr('rel');
    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").siblings().addClass("activeNav");
    $(relatedClass).siblings().removeClass("active");
    $(relatedClass).addClass('active');

    console.log(relatedClass);
  });


});
  // //our event bindings for each click off the header navs
  // $menu.click(function (event) {
  //   event.preventDefault();
  //   var $myLi = $(this).closest("article");
  //   var $mySiblings = $myLi.siblings();
  //
  //   $mySiblings.removeClass("active");
  //   $myLi.addClass("active");
  //
  //   $('.menu').siblings().removeClass("active");
  //   $('.menu').addClass('active');
  //
  // });
  // $album1.click(function (event) {
  //   event.preventDefault();
  //   var $myLi = $(this).closest("article");
  //   var $mySiblings = $myLi.siblings();
  //
  //   $mySiblings.removeClass("active");
  //   $myLi.addClass("active");
  //
  //   $('.album1').siblings().removeClass("active");
  //   $('.album1').addClass('active');
  //
  // });
  //
  // $album2.click(function (event) {
  //   event.preventDefault();
  //
  //   $(this).closest("article").siblings().removeClass("active");
  //   $(this).closest("article").addClass("active");
  //   $('.album2').siblings().removeClass("active");
  //   $('.album2').addClass('active');
  //
  // });
  //
  // $album3.click(function (event) {
  //   event.preventDefault();
  //
  //   $(this).closest("article").siblings().removeClass("active");
  //   $(this).closest("article").addClass("active");
  //   $('.album3').siblings().removeClass("active");
  //   $('.album3').addClass('active');
  //
  // });
  //
  //
  // $album4.click(function (event) {
  //   event.preventDefault();
  //
  //   $(this).closest("article").siblings().removeClass("active");
  //   $(this).closest("article").addClass("active");
  //   $('.album4').siblings().removeClass("active");
  //   $('.album4').addClass('active');
  //
  // });
  //
  //
  // $album5.click(function (event) {
  //   event.preventDefault();
  //
  //   $(this).closest("li").siblings().removeClass("active");
  //   $(this).closest("li").addClass("active");
  //   $('.album5').siblings().removeClass("active");
  //   $('.album5').addClass('active');
  //
  // });
  //
  // $album6.click(function (event) {
  //   event.preventDefault();
  //
  //   $(this).closest("li").siblings().removeClass("active");
  //   $(this).closest("li").addClass("active");
  //   $('.album6').siblings().removeClass("active");
  //   $('.album6').addClass('active');
  //
  // });
  //


//nav default display none, click
