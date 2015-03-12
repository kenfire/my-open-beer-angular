module.exports=function() {
	var factory={breweries:{},beers:{},server:{}};
    //Beer
    factory.activeBeer=undefined;
    factory.beers.loaded=false;
    factory.beers.refresh="all";//all|ask
    factory.beers.update="immediate";//deffered|immediate
    //Brewery
	factory.activeBrewery=undefined;
	factory.breweries.loaded=false;
	factory.breweries.refresh="all";//all|ask
	factory.breweries.update="immediate";//deffered|immediate
    //Server
	factory.server.privateToken="";
	factory.server.restServerUrl="http://127.0.0.1/rest-open-beer/";
	factory.server.force=false;

	return factory;
};