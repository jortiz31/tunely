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
});

function handleRecAllAlbums(json) {
  console.log(json);
  json.forEach(renderAlbum);
}

function handleError(e) {
  console.log('uh oh');
}

// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album:', album);
  var source = $('#album-template').html();
  var templateFunc = Handlebars.compile(source);
  newHTML = templateFunc(album);
  $('#albums').prepend(newHTML);

}



//
