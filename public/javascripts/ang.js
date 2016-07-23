var app = angular.module('contact', []);

app.factory('form', ['$http', function($http){
    var f = {
        f_data: []
    };

    // f.submit = function(f_data){
    //     return $http.post('/mail', post)
    //         .success(function(){
    //             console.log('success');
    //         });
    // };

}]);

app.controller('ContactCtrl', ['$scope', 'form', function ($scope, form) {
    // $scope.f = form.f;
    // $scope.submitForm = function(){
    //     f.submit({
    //         name: $scope.name,
    //         org: $scope.org,
    //         email: $scope.email,
    //         req: $scope.req
    //     });

    //     $scope.name = '';
    //     $scope.org = '';
    //     $scope.email = '';
    //     $scope.req = '';
    // };
}]);