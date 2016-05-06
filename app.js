angular.module('myApp',[])
  .directive('customBox',function($compile) {
    return {
      templateUrl: 'customBox.html',
      controller: function($scope) {
        $scope.name = "Ram";
        console.log($scope);
      },
      link: function($scope,$element,$attr) {
        // console.log($scope);
        console.log($element);
        console.log($compile('<div>Hello</div><div ng-bind="name"></div>'));
        $element.append(angular.element($compile('<div>Hello</div><div ng-bind="name"></div>')($scope)));

        // console.log($attr);
      }
    }
  })
  .controller('myController',function($scope){
    $scope.fullname = "Ram Sita";
    $scope.full = "Ram Sita";

  });
