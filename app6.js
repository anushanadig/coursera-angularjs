(function (){
    'use strict';

    angular.module('NameCalculator',[])
    .controller("NameCalculatorController",function($scope){
        $scope.name = "";
        $scope.total = 0;

        $scope.calculateValue = function(){
             var str = $scope.name;
             var val = $scope.total;
            for (var i = 0; i < str.length; i++){
                val += str.charCodeAt(i);
            }
            return val; 
           // return 0;
        };

    });

})();
