(function(){
    angular.module("digestApp",[])
    .controller('diegstController',diegstController);

    diegstController.$inject = ['$scope'];

    function diegstController($scope){
        $scope.val = 1;
        
       // console.log(`Watchers count: ${$scope.$$watchersCount}`);
        $scope.showNumOfWatchers = function(){
            console.log(`Watchers count: ${$scope.$$watchersCount}`);
        }
        $scope.incVal  = function(){
            $scope.val++;
        }

        $scope.$watch(function(){
            console.log("digest loop fired!");
        })
        /* $scope.$watch('val',function(newValue,oldValue){
            console.log("old:",oldValue);
            console.log("new:",newValue);
        }); */
    }
    
})();