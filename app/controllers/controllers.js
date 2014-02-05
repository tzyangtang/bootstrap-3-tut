/*#######################################################################
  
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Normally like the break AngularJS controllers into separate files.
  Kept them together here since they're small and it's easier to look through them.
  example. 

  #######################################################################*/

app.controller('SingleController', function ($scope, $location, $anchorScroll, $routeParams, articlesService) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.articles = articlesService.getArticles();
    }
    
    $scope.scrollTo = function(id) {
     $location.hash(id);
     $anchorScroll();
  }
});