/*#######################################################################
  
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Normally like the break AngularJS controllers into separate files.
  Kept them together here since they're small and it's easier to look through them.
  example. 

  #######################################################################*/

app.controller('SingleController', function ($log, $scope, $http, $location, $anchorScroll, $routeParams, articlesService) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.articles = articlesService.getArticles();
   	 	$http.get('http://localhost:8080/info').
   	 		success(function(data) {
//   	 			$log.log(data);
   	 			$scope.infos = data._embedded.info;
   	 			
//   	 			$scope.infos = [{
//   	             id: 1, 
//   	            title: 'Article 1 title', 
//   	            content: 'Sed ullamcorper, augue vitae lacinia auctor, lacus orci consequat nisi, sed tristique lorem nisi nec dolor. Morbi lacinia urna orci, ac porta arcu condimentum sed. Nam eget dui vel leo mattis consequat. Donec blandit gravida dui nec porttitor. Vestibulum pharetra, dui id malesuada dapibus, augue mi egestas nunc, in laoreet quam nisl vitae enim. Vestibulum ut mollis magna. Sed quis elit eget mi elementum faucibus sed scelerisque dui. Quisque lobortis erat est, semper feugiat turpis fringilla vitae. Quisque faucibus est id sapien tristique accumsan. Sed vitae volutpat lorem. Vivamus quis iaculis leo, vel molestie risus. In placerat varius augue, lobortis gravida lectus mattis a. Cras pulvinar, mauris ut varius pulvinar, nisl lectus aliquam enim, quis pharetra dui elit et diam. Etiam convallis turpis mollis quam dictum sodales.', 
//   	            createdOn: '2/5/2014',
//   	            img: 'img/350x150.gif',
//   	            tags: [
//   	                { tag: 'Basket'},
//   	                { tag: 'Yarn'},
//   	                { tag: 'Needes'}
//   	            ]
//   	        }]
   	 		});
//			$scope.infos = [{
//  	             id: 1, 
//  	            title: 'Article 1 title', 
//  	            content: 'Sed ullamcorper, augue vitae lacinia auctor, lacus orci consequat nisi, sed tristique lorem nisi nec dolor. Morbi lacinia urna orci, ac porta arcu condimentum sed. Nam eget dui vel leo mattis consequat. Donec blandit gravida dui nec porttitor. Vestibulum pharetra, dui id malesuada dapibus, augue mi egestas nunc, in laoreet quam nisl vitae enim. Vestibulum ut mollis magna. Sed quis elit eget mi elementum faucibus sed scelerisque dui. Quisque lobortis erat est, semper feugiat turpis fringilla vitae. Quisque faucibus est id sapien tristique accumsan. Sed vitae volutpat lorem. Vivamus quis iaculis leo, vel molestie risus. In placerat varius augue, lobortis gravida lectus mattis a. Cras pulvinar, mauris ut varius pulvinar, nisl lectus aliquam enim, quis pharetra dui elit et diam. Etiam convallis turpis mollis quam dictum sodales.', 
//  	            createdOn: '2/5/2014',
//  	            img: 'img/350x150.gif',
//  	            tags: [
//  	                { tag: 'Basket'},
//  	                { tag: 'Yarn'},
//  	                { tag: 'Needes'}
//  	            ]
//  	        }]
    }
    
    $scope.scrollTo = function(id) {
     $location.hash(id);
     $anchorScroll();
  }
});