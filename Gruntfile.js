module.exports = function (grunt) {

  'use strict';

  grunt.loadTasks('tasks');

  grunt.initConfig({
    'htpasswd': {
      'options': {
        'users': [
          {'user1': 'passwd'},
          {'user2': 'passwd2'}
        ],
        'allowed_ips': [
          '1.2.3.4',
          '4.5.6.7',
          '8.9.8.9'
        ],
        'file_path': 'tmp/.htpasswd',
        'conf_path': 'tmp/acl.conf'
      }
    }
  });

  grunt.registerTask('default', ['htpasswd']);
};