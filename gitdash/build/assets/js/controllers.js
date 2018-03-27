angular.module('gitdash').controller(
  'gitController',
  function($scope, gitService, $state, $stateParams){
    $scope.pullslist = function(){
        gitService.getPulls().then(function(data){
          $scope.pulls = data;
        });
    };
});
