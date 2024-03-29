var IndexCtrl = function($scope, $location, $http, productData){
    // $scope.data = productData;
    // productData.loadProducts();


    $scope.data= {};

    productData.loadProducts(function(data){
        $scope.data.products = data.products;
    });

    $scope.viewPost = function(productId){
        $location.url('/product/' + productId);
    };

    $scope.navNewProduct = function(){
        $location.url('/product/new');
    };
};