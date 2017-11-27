(function(){
    'use strict';

    angular.module("digestApp",[])
    .controller('diegstController',diegstController);

    diegstController.$inject = ['$scope','$timeout'];

    function diegstController($scope,$timeout){
        $scope.val = 1;
        
         $scope.incVal  = function(){
            $timeout(function(){
                    $scope.val++;
                    console.log("incremented");       
            },1000);
        };
       
        /* $scope.incVal  = function(){
            setTimeout(function(){
                $scope.$apply(function(){
                    $scope.val++;
                    console.log("incremented");
                });
                    
            },1000);
        };
 */
        /* $scope.incVal  = function(){
            setTimeout(function(){
                $scope.val++;
                console.log("incremented");
                $scope.$digest();
            },1000);
        }; */
      };
    
})();