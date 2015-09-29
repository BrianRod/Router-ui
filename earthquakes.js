'use strict';

app.factory("earthquakes", ["$http", function($http){
	console.log("HELLO");
	var service = {};

	service.get = function(){
		return $http.get("//apis.is/earthquake/is");
	}

	return service;
}]);