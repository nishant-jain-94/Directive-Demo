angular.module('myApp',[])
  .directive('customBox',function() {
    return {
      templateUrl: 'customBox.html',
      controller: function($scope) {
        $scope.name = "Ram";
        console.log($scope);
      },
      link: function($scope,$element,$attr) {
        console.log($scope);
        console.log($element);
        console.log($attr);
      }
    }
  })
  .controller('myController',function($scope){
    $scope.fullname = "Ram Sita";
    $scope.full = "Ram Sita";

  });
