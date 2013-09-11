var fs = require('fs');
var path = require('path');

var algorithms = {};
var validJSRegexp = /^(.*)(\.js)$/;

// pick up all js files from the 'algorithms' folder
var algoDir = path.resolve(__dirname, 'algorithms');
var algoFiles = fs.readdirSync(algoDir);
algoFiles.forEach(function (file) {
  // Parse the file name for testing
  var matches = file.match(validJSRegexp);
  var extension = matches && matches[2];

  // if they are ".js" files
  if (extension === '.js') {
    var name = matches[1];
    var filepath = path.resolve(algoDir, file);
    // load them as a named algorithm
    algorithms[name] = require(filepath);
  }
});

module.exports = algorithms;
