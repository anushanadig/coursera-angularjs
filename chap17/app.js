(function(){

    var shoppingList1 = ["chocolates", "milk", "cookies", "ice-cream", "chips"];

    var shoppingList2 = [
    {
        name: "chocolates",
        price: "100"
    },
    {
        name: "milk",
        price: "200"
    },
    {
        name: "cookies",
        price: "300"
    },
    {
        name: "ice-cream",
        price: "500"
    },
    {
        name: "milk",
        price: "100"
    }
]
    angular.module("ShoppingListApp",[])
    .controller("shoppingController",ShoppingController);

    ShoppingController.$inject = ["$scope"];
    function ShoppingController($scope){
        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2 = shoppingList2;

        $scope.addToList = function(){
            var newItem ={
                name: $scope.newItem,
                price: $scope.newPrice
            
            }
            $scope.shoppingList2.push(newItem);
        };
    }

})();