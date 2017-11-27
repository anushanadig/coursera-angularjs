(function(){
    'use strict';

    angular.module("digestApp",[])
    .controller('diegstController',diegstController);

    diegstController.$inject = ['$scope','$timeout'];

    function diegstController($scope,$timeout){
        $scope.val = 1;
        $scope.name = "anusha";

        $scope.showNumOfWatchers = function(){
            console.log(`Watchers count: ${$scope.$$watchersCount}`);
        }
        
         $scope.incVal  = function(){
            $timeout(function(){
                    $scope.val++;
                    $scope.name = "anusha2";
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