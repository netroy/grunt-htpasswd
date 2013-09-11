var algorithms = require('../lib/algorithms');

module.exports = function (grunt) {

  'use strict';

  grunt.registerTask('htpasswd', function () {

    var options = this.options();
    var user = options.users[0];
    var username = Object.keys(user)[0];
    var password = user[username];
    var expected = 'user1:$apr1$BA1xhZb1$7rTSS3xvWgcx.XVS7Nwzj0';
    console.log('%s:%s', username, algorithms.sha1(password));
    console.log('%s:%s', username, algorithms.bcrypt(password));
    console.log(expected);
  });
};