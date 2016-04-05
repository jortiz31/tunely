/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */

$(document).ready(function() {
  console.log('app.js loaded!');
  $.ajax({
    method: 'GET',
    url: '/api/albums',
    success: handleRecAllAlbums,
    error: handleError
  });
  $("#album-form form").submit(function(event) {
    event.preventDefault();
    console.log($(this).serialize());
    $(this).trigger('reset');

    // $.ajax({
    //   method: 'POST',
    //   url: '/api/albums'
    //   success: renderNewAlbum,
    //   error: postError
    // });
  });
});

function handleRecAllAlbums(json) {
  // console.log(json);
  json.forEach(renderAlbum);
}

function handleError() {
  console.log('uh oh');
}

function renderNewAlbum(json) {
  console.log("shits working son");
  // json.forEach(renderAlbum);

}

function postError() {
  console.log('uh oh');
}

// this function takes a single album and renders it to the page
function renderAlbum(album) {
  // console.log('rendering album:', album);
  var source = $('#album-template').html();
  var templateFunc = Handlebars.compile(source);
  newHTML = templateFunc(album);
  $('#albums').prepend(newHTML);
}







//
