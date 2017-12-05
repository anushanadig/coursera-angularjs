(function() {
  angular
    .module("MenuApp", [])
    .controller("menuController", MenuController)
    .service("menuService", MenuService)
    .constant("ApiBasePath", "https://davids-restaurant.herokuapp.com");

  MenuController.$inject = ["menuService"];
  function MenuController(menuService) {
    var menu = this;

    var promise = menuService.getMenuCategories();
    promise
      .then(function(response) {
        menu.categories = response.data;
      })
      .catch(function(error) {
        console.log("errro!");
      });

    menu.logMenuItems = function(shortName) {
      var promise = menuService.getMenuForCategories(shortName);
      promise
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    };
  }

  MenuService.$inject = ["$http", "ApiBasePath"];
  function MenuService($http, ApiBasePath) {
    var service = this;

    service.getMenuCategories = function() {
      var response = $http({
        method: "GET",
        url: ApiBasePath + "/categories.json"
      });
      return response;
    };

    service.getMenuForCategories = function(shortName) {
      var response = $http({
        method: "GET",
        url: ApiBasePath + "/menu_items.json",
        params: {
          category: shortName
        }
      });
      return response;
    };
  }
})();
