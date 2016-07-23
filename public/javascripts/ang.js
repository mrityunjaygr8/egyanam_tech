var app = angular.module('contact', []);

app.controller('ContactCtrl', ['$scope', '$http',function ($scope, $http) {
    $scope.submitForm = function(){
        var submit_data = {
            name: $scope.name,
            org: $scope.org,
            email: $scope.email,
            req: $scope.req
        };

        $http.post('/mail', submit_data).
            success(function(data){
                $scope.response = data.name + " your interest has been lodged.We will contact you shortly."
            });

        $scope.name = '';
        $scope.org = '';
        $scope.email = '';
        $scope.req = '';
    };
}]);