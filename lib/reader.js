var fs = require('fs');

var encodingOptions = { 'encoding': 'utf8' };

// load a htpasswd file & return it as a map
function load (file) {
  var map = {};
  // read the file synchronously, this isn't a server
  var content = fs.readFileSync(file, encodingOptions);
  // split out the lines
  var lines = content && content.split(/[\r\n]+/g);
  if (lines) {
    // For every line
    lines.forEach(function (line) {
      // parse out the user & the hash
      var tokens = line && line.split(/: ?/);
      // if the line had a : separated string pair,
      if (tokens.length === 2) {
        var user = tokens[0];
        var hash = tokens[1];
        // update the map with the user/hash combination
        map[user] = hash;
      }
    });
  }
  // return the hash object
  return map;
}

// save a map as htpasswd file
function save (map, file) {
  // get the users as an array
  var users = Object.keys(map || {});
  // return if the map was empty or null
  if (users.length === 0) {
    return;
  }

  var lines = [];
  // for every user
  users.forEach(function (user) {
    var hash = map[user];
    // generate the : separated line
    var line = [user, hash].join(':');
    lines.push(line);
  });
  // and dump these lines to a file
  fs.writeFileSync(file, lines.join('\n'), encodingOptions);
}

module.exports = {
  'load': load,
  'save': save
};