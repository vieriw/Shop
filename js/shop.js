angular.module('todoApp', [])
.controller('MyController', ['$scope', function($scope) {

  //default products list
  $scope.products = [
    {name:'Braun Wall',price:100,selected:false},
    {name:'Steel Wall',price:100,selected:true},
    {name:'HAY Analog',price:100,selected:false}
  ];

  //check if there is more than 1 product in the list
  $scope.plural = function (tab){
    return tab.length > 1 ? 's': ''; 
  };
  
  //add new Product
  $scope.addProduct = function(isValid){
    if(isValid) {
      $scope.newProduct.selected=false;
      $scope.products.push($scope.newProduct);
    } 
    //clear the new product form
      $scope.newProduct= {};
      $scope.myForm.$setUntouched();
  };
  
  //subset list of selected products
  $scope.selection = [];

  $scope.$watch('products|filter:{selected:true}', function (nv) {
    $scope.selection = nv.map(function (product) {
      return product;
    });
  }, true);

}]);