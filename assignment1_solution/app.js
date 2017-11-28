(function(){
    'use strict';

    angular.module("foodApp",[])
    .controller("foodController",foodController);
    foodController.$inject = ['$scope'];

    function foodController($scope){
        $scope.foodList = "";
        $scope.message = "";
        $scope.checkList = function(){
            var sep = ",";
            //console.log($scope.foodList);
            var splits = ($scope.foodList).split(',');
            //console.log(splits);
            var len = splits.length;
            //console.log(len);

            //to handle a case where there is no item between some commas
            for( var i = 0; i < len; i++){
                if(splits[i] === "") 
                    len = len-1;
            }

            //textbox is empty or a string with just spaces in it
            if(splits[0] === ""){
                $scope.message = "Please enter data first";
                $scope.state = false;
            }
            
            else if(len <= 3){
                $scope.message = "Enjoy!";
                $scope.state = true;
            }

            else{
                $scope.message = "Too much!";
                $scope.state = true;
            }
        };
    };
})();