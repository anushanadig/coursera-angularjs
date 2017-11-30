(function(){
    angular.module("ShoppingListApp",[])
    .controller("shoppingListAddController",ShoppingListAddController)
    .controller("shoppingListShowController",ShoppingListShowController)
    .service("shoppingListService",ShoppingListService);

    ShoppingListAddController.$inject = ["shoppingListService"];

    function ShoppingListAddController(shoppingListService){
        //var addList = this;
        this.itemName = "";
        this.itemPrice = "";

         this.addItem = function(){
            shoppingListService.addItem(this.itemName,this.itemPrice);
         }
    }

    ShoppingListShowController.$inject = ["shoppingListService"];

    function ShoppingListShowController(shoppingListService){
        this.items = shoppingListService.getItems();
        this.removeItem = function(index){
            shoppingListService.removeItem(index);
        }
    }

    function ShoppingListService(){
        var items = [];

        this.addItem = function(itemName,itemPrice){
            var item ={
                name: itemName,
                price: itemPrice
            }
            items.push(item);
        }

        this.getItems = function(){
            return items;
        }

        this.removeItem = function(index){
            items.splice(index,1);
        }
    }

})();