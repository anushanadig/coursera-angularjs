(function(){
    'use strict';
    angular.module("ScopeInheritanceApp",[])
    .controller("ParentController",ParentController)
    .controller("ChildController",ChildController);

    /* ParentController.$inject = ["$scope"]; */

    function ParentController(){
        /* $scope.parentValue = 1;
        $scope.pc = this;
        $scope.pc.parentValue = 1; */
        var parent = this;
        parent.value = 1;

    }

    ChildController.$inject = ["$scope"];
    function ChildController($scope){
        /* console.log("$scope.parentValue", $scope.parentValue);
        console.log("child $scope",$scope);

        $scope.parentValue = 2;
        console.log("$scope.parentValue", $scope.parentValue);
        console.log("child $scope",$scope);
 */

        /* console.log("$scope.pc.parentValue", $scope.pc.parentValue);
        $scope.pc.parentValue = 2;
        console.log("$scope.pc.parentValue", $scope.pc.parentValue);
        console.log("child $scope",$scope); */

        var child = this;
        child.value = 2;
        console.log("childcontroller $scope",$scope);

    }

})();