'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  //Runs an ajax request that will give us a list of the user repos. This is called in aboutController.index in the aboutController file.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
      .then(data => repos.all = data, err => console.error(err))
      .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
