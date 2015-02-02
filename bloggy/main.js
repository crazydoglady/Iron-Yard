var blogPage = {
  init: function() {
    blogPage.initStyling();
    blogPage.initEvents();
    blogPage.addAllPosts(posts);
  },
  initStyling: function() {
    console.log("called init styling");
  },
  initEvents: function() {
    $("body").on("click", function() {
      alert("my event is bound")
    });
    console.log("calledinit Events");
  },
  addPost: function(post, index, array) {
    //compiled underscore template
    var compiled = _.template(templates.post, post);
    console.log(compiled(post));

    $("section").append(compiled)
    // $("section").append(
    //   "<article>" + "<h3>" + post.title + "</h3>" + "<p>" + post.content + "</p>" + "<blockquote>" + post.author + "</blockquote>" + "</article>"
    );
  },
  addAllPosts: function (postsData) {
    postsData.forEach(blogPage.addPost);
  }
};

$(document).ready(function() {
  //code for page goes here
  blogPage.init();
});
