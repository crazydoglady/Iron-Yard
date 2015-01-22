$(document).ready(function() {
  //execute our javascript safely
  var post1 =$('nav a').eq(0);
  var post2 =$('nav a').eq(1);
  var post2 =$('nav a').eq(2);

  console.log(post2);

  $post1.click(function(event) {
    event.preventDefault();
    $(this).closest("li").siblings().removeClass("activeNav");
    // saying that siblings of closest li are what I want. Post 2 on its own has no siblings. This adds all li itemes within the same ul.
    $(this).closest("li").siblings().addClass("activeNav");
    $('.post1').siblings().removeClass("active");
    $('.post1').addClass('active');
  });
  $post2.click(function(event) {
    event.preventDefault();
    $(this).closest("li").siblings().removeClass("activeNav");
    // saying that siblings of closest li are what I want. Post 2 on its own has no siblings. This adds all li itemes within the same ul.
    $(this).closest("li").siblings().addClass("activeNav");
    $('.post2').siblings().removeClass("active");
    $('.post2').addClass('active');
  });
  $post3.click(function(event) {
    event.preventDefault();
    $(this).closest("li").siblings().removeClass("activeNav");
    // saying that siblings of closest li are what I want. Post 2 on its own has no siblings. This adds all li itemes within the same ul.
    $(this).closest("li").siblings().addClass("activeNav");
    $('.post3').siblings().removeClass("active");
    $('.post3').addClass('active');
  });

});
