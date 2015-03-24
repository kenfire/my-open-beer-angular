module.exports=function($scope,config,$location){
    $scope.brewery = config.activeBrewery;
    if (angular.isUndefined(config.activeBrewery)) {
        $location.path("breweries/");
    }

};
