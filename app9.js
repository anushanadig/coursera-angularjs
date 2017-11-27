  (function(){

    angular.module("DependencyInjection",[])
    .controller("uppercaseController",uppercaseController);

    uppercaseController.$inject = ['$scope','$filter'];
    function uppercaseController($scope,$filter){
        $scope.name = "";

        $scope.upper = function(){
            var upperCase = $filter('uppercase');
            $scope.name = upperCase($scope.name);
            
        };

    }

})(); 

//minification
//!function(){function e(e,n){e.name="",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}angular.module("DependencyInjection",[]).controller("uppercaseController",["$scope","$filter",e])}();