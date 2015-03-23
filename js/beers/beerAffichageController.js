module.exports=function($scope,config,$location){
    $scope.beer = config.activeBeer;
    if (angular.isUndefined(config.activeBeer)) {
        $location.path("beers/");
    }

};