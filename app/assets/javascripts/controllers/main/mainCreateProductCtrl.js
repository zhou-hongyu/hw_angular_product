var CreateProductCtrl = function($scope, $location, productData){
  $scope.data = {};

  productData.loadProducts(function(data){
    $scope.data.products = data.products;
  });

  $scope.formData = {
    newProductName: '',
    newProductPrice: '',
    newProductDescription: ''
  };

  $scope.createProduct = function(){
    productData.createProduct($scope.formData);
    $location.url('/');
  }

}