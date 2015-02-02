$(document).ready(function ({

});



var page={
  init: function() {

  },

  initStyling: function() {

  },
  initEvents: function() {
    console.log()'initevents'

    config: { //by saving as config object, makes accessible throughout code using dot notation.
      baseURL:'https://api.instagram.com/v1media/search?',
      clientID:'b362'
      lat: //latitude
      lng: //longitutde
    }
  },

  getPhotosNearMe: function() {
    $.ajax({
      url: page.config.baseURL + 'lat'= + page.config.lat + '&lng=' + page.config.lng + '$client_id' + page.config.client_id,
      type: 'GET'
      dataType:'JSONP'
      success: function( data) {
        console.log(data);
        data.data.forEach(function(item, idx, arr)) //data is returned in an array, so you must use for each to iterate through it
        $('.container').append(<'img src=""')
      };
      error: function( error) {

      },
    });
  }
  getPhotosByTag: function (term) {
  $.ajax({
    url:page.config.baseURL + 'tags/' + term + '/media/recent?client_id='
    type:'GET',
    dataType: 'JSONP',
    success: function () {
      
    },
    error: function (){

    }
  });







};
