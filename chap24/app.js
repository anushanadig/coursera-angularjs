(function() {
  angular
    .module("ShoppingListApp", [])
    .controller("shoppingListController", ShoppingListController)
    .service("shoppingListService", ShoppingListService)
    .service("weightLossFilterService", WeightLossFilterService);

  ShoppingListController.$inject = ["shoppingListService"];

  function ShoppingListController(shoppingListService) {
    this.itemName = "";
    this.itemPrice = "";

    this.addItem = function() {
      shoppingListService.addItem(this.itemName, this.itemPrice);
    };

    this.removeItem = function(index) {
      shoppingListService.removeItem(index);
    };
  }

  ShoppingListService.$inject = ["$q", "weightLossFilterService"];
  function ShoppingListService() {
    var items = [];

    this.addItem = function(name, price) {
      var promise = WeightLossFilterService.checkName(name);

      promise.then(
        function(response) {
          var nextPromise = WeightLossFilterService.checkPrice(price);

          nextPromise.then(
            function(result) {
              var item = {
                name: name,
                price: price
              };
              items.push(item);
            },
            function(errorResponse) {
              console.log(errorResponse.message);
            }
          );
        },
        function(errorResponse) {
          console.log(errorResponse.message);
        }
      );
    };

    this.getItems = function() {
      return items;
    };

    this.removeItem = function(index) {
      items.splice(index, 1);
    };
  }

  WeightLossFilterService.$inject = ["$q", "$timeout"];
  function WeightLossFilterService($q, $timeout) {
    this.checkName = function(name) {
      var defferd = $q.defer();

      var result = {
        message: ""
      };

      $timeout(function() {
        if (name.toLowerCase().indexOf("cookie") === -1) {
          defferd.resolve(result);
        } else {
          result.message = "cookies not allowed!!";
          defferd.reject(result);
        }
      }, 2000);
      return defferd.promise;
    };

    this.checkPrice = function(price) {
      var defferd = $q.defer();

      var result = {
        message: ""
      };

      $timeout(function() {
        if (price < 200) {
          defferd.resolve(result);
        } else {
          result.message = "too costly!";
          defferd.resolve(result);
        }
      }, 1000);
      return defferd.promise;
    };
  }
})();
