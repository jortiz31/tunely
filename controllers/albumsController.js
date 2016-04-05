/************
 * DATABASE *
 ************/

var db = require('../models');

// GET /api/albums
function index(req, res) {
  // FILL ME IN !
  // res.json(albums);
  db.Album.find({}, function(err, tacos){
    if (err){ console.log ("uh, oh", err); }
    res.json(tacos);
  });
}

function create(req, res) {
  // FILL ME IN !
}

function show(req, res) {
  // FILL ME IN !
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
