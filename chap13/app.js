(function(){
    
        angular.module("customFilter",[])
        .controller("filterController",filterController)
        .filter('name',filterFactory)
        .filter('truth',truthFactory);
        
    
        filterController.$inject = ['$scope',nameFilter];
        function filterController($scope,nameFilter){
            $scope.name = "";
    
            $scope.upper = function(){
                var upperCase = $filter('uppercase');
                $scope.name = upperCase($scope.name);
            };
            $scope.applyFilter = function(){
                var cname = "anusha_anusha"
                cname = nameFilter(cname,'nu','mi');
                return cname;
            }
        }  
            function filterFactory(){
                return function(input,find,replace){
                    input = input.replace(find,replace);
                    return input;
                };
            }
            function truthFactory(){
                return function(input,find,replace){
                    input = input.replace(find,replace);
                    return input;
                };
            }
        
    })(); 