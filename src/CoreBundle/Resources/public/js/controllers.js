
var myApp = angular.module('myApp', []);

// listing data with search
myApp.controller('ProductListCtrl', function ($scope,$http) {

    var $url =  Routing.generate('product_list_angular');

  $http.post($url).success(function(data) {
      $scope.products = data
   });
});

//insert data

myApp.controller('formController', function ($scope,$http) {

    $scope.formData = {};


$scope.createProduct = function (){

        var productData =[];
            productData['name'] = $scope.formData.name;
            productData['description'] = $scope.formData.description;
            productData['quantity'] = $scope.formData.quantity;
            productData['price'] = $scope.formData.price;
            productData['status'] = $scope.formData.status;

       var request = $http({
            method: "post",
            url:Routing.generate('product_add'),
            data    : productData,
            headers : { 'Content-Type': 'application/json' }
        });
        request.success(function( html ) {
                console.log(html)
            }
        );

}

});



