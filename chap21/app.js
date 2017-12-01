(function(){
    angular.module("ShoppingListApp",[])
    .controller("shoppingListController1",ShoppingListController1)
    .controller("shoppingListController2",ShoppingListController2)
    .factory("shoppingListFactory",ShoppingListFactory);

    //List1 controller
    ShoppingListController1.$inject = ["shoppingListFactory"];

    function ShoppingListController1(shoppingListFactory){
        //var addList = this;
        var shoppingList = ShoppingListFactory();
        //this.items = shoppingList.getItems();
        this.itemName = "";
        this.itemPrice = "";

         this.addItem = function(){
            shoppingList.addItem(this.itemName,this.itemPrice);
         }

         this.removeItem = function(index){
            shoppingList.removeItem(index);
        }
    }

    //list2 controller
    ShoppingListController2.$inject = ["shoppingListFactory"];
    
        function ShoppingListController2(shoppingListFactory){
            //var addList = this;
            var shoppingList = ShoppingListFactory(5);
            this.itemName = "";
            this.itemPrice = "";
    
             this.addItem = function(){
                 try {
                shoppingList.addItem(this.itemName,this.itemPrice);
                 } catch (error){
                     this.errorMessage = error.message;
                 }
             }
    
             this.removeItem = function(index){
                shoppingList.removeItem(index);
            }
        }

    

    function ShoppingListService(maxItems){
        var items = [];

       this.addItem = function(itemName,itemPrice){
            if ((maxItems === undefined) || 
            (maxItems !== undefined) && (items.length < maxItems)){
                 var item ={
                name: itemName,
                price: itemPrice
                };
            items.push(item);
            }
            else{
                throw new Error("max items("+ maxItems + ")reached");
            }
        }

    

        this.getItems = function(){
            return items;
        }

        this.removeItem = function(index){
            items.splice(index,1);
        }
    }

    function ShoppingListFactory() {
        var factory = function(maxItems) {
            return new ShoppingListService(maxItems);
        };
        return factory;
    }

})();