(function(){
    'use strict';

    angular.module("foodApp",[])
    .controller("foodController",foodController);
    foodController.$inject = ['$scope'];

    function foodController($scope){
        $scope.foodList = "";
        $scope.message = "";
        //$scope.box-color = false;
        $scope.checkList = function(){
            var sep = ",";
            //console.log($scope.foodList);
            var splits = ($scope.foodList).split(',');

             /* for( var i = 0; i < splits.length; i++){
                if(splits[i] == "") 
                  splits.splice(i,1);
            }  */

            
            splits = splits.filter(function isNotEmpty(item){
                return item;
            });
            

            console.log(splits);
            var len = splits.length;
            //console.log(len);

            //to handle a case where there is no item between some commas
            /* for( var i = 0; i < len; i++){
                if(splits[i] === "") 
                    len = len-1;
            } */

            //textbox is empty or a string with just spaces in it
            if(!$scope.foodList){
                $scope.message = "Please enter data first";
                $scope.isValid = "red";
            }
            
            else if(len <= 3){
                $scope.message = "Enjoy!";
                $scope.isValid = "green";
            }

            else{
                $scope.message = "Too much!";
                $scope.isValid = "green";
            }
        };
    };
})();