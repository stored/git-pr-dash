angular.module('gitdash').factory(
  'gitService',
  function($http){
    var url = 'https://api.github.com/repos/stored/empiricus-api/pulls';
    var gitService = {
      getPulls: function() {
        return $http.get(
          url,{
            headers: {
              'Accept': 'github.v3; format=json',
              'content-type': 'application/json',
              'Authorization': 'token '
            }
          }
          ).then(
            function(response){
              return response.data
            }
          )
        }
    };
    return gitService
  }
);
