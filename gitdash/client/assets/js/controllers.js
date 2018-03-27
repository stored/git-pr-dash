angular.module('gitdash').controller(
  'gitController',
  function($scope, gitService, $state, $stateParams){
    $scope.pullslist = function(){
        gitService.getPulls().then(function(data){
          var pullArr = [];
          for (var i = 0; i < data.length; i++) {

            var item = {
              message: data[i].body,
              number: data[i].number,
              title: data[i].title,
              state: data[i].state,
              updated_at: data[i].updated_at,
            };

            console.log(data[i].assignee);
            if(data[i].assignee == null){
              item['username'] = 'N/D';
              item['avatar_url'] = '';
            }
            else{
              item['username'] = data[i].assignee.login;
              item['avatar_url'] = data[i].assignee.avatar_url;
            }
            pullArr.push(item);
          }
          $scope.pulls = pullArr;
        });
    };
});
