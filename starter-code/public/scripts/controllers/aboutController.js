'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  //In the index.html this finds the id of about and shows what ever is attached to the id about, which in this case is the articles, and then finds the siblings and hides them, then calls the function that is in the repos.js file. This function gets called as response in routes.
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
