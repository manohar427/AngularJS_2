var myModule = angular.module("myApp", []);

var myController1 = function($scope) {
	$scope.countries = [ 
	{
		countryName : "USA",
		states : [{stateName:"USA1"},{stateName:"USA2"},{stateName:"USA3"}]		
	}, 
	{
		countryName : "IN",
		states : [{stateName:"IN1"},{stateName:"IN2"},{stateName:"IN3"}]		
	}, 
	{
		countryName : "UK",
		states : [{stateName:"UK1"},{stateName:"UK2"},{stateName:"UK3"}]		
	}];
};

myModule.controller("controller1", myController1);
