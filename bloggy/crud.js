var blogPage = {

  init: function() {

  },

  initStyling: function() {
    blogPage.renderAllPosts(posts);
  },

  initEvents: function() {
    $('aside .box form').on ('submit', function (event) {
      event.preventDefault();
      blogPage.CreatePost();
    }
  },
  createPost: function() { //this uses info from the form created in html
    var newPost = { //new data will be created everytime this is called
      title: $('.box input[name="title"]').val //title goes here
      content: $('.box input textarea[name="content"]').val //content goes here
      author: $('.box input[name="author"]').val //author goes here
      isPublished: true;
    }
      posts.push(newPost); //pushing post
      blogPage.renderAllPosts(posts); //will render over all posts in array
       //loads to memory
  },
  updatePost: function() {

  },
  deletePost: function() {

  },

  renderPost: function(post, index, array) {
    var compiled = _.template(templates.post, post);
    $('section').append(compiled);
  },
  renderAllPosts: function() {

  },

};

$(document).ready(function (){

  blogPage.init();




});







}
