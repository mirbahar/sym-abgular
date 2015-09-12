
var npmsApp = angular.module('myApp', []);

// listing data with search
npmsApp.controller('ProductListCtrl', function ($scope,$http) {

    var $url =  Routing.generate('product_list_angular');

  $http.post($url).success(function(data) {
      $scope.products = data
   });
});

//insert data


//npmsApp.controller('ProjectListCtrl', function ($scope,$http) {
//
//
//$scope.createProject = function (){
//var d = $("#project-form").serialize();
//
//    var request = $http({
//        method: "post",
//        url: Routing.generate('project_add'),
//        data: d
//    });
//    request.success(
//        function( html ) {
//
//            // $scope.cfdump = html;
//        }
//    );
//}
//
//});



