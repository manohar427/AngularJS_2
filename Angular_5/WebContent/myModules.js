var myModule = angular.module("myApp", []);

var myController1 = function($scope) {
	$scope.persons = [ 
	{
		name : "John 1",
		age : 35,
		email : "john1@email.com",
		salary : 1777455.25
	}, {
		name : "John 2",
		age : 35,
		email : "john2@email.com",
		salary : 8882455.25
	}, {
		name : "John 3",
		age : 35,
		email : "john3@email.com",
		salary : 1298755.25
	}, {
		name : "John 4",
		age : 35,
		email : "john4@email.com",
		salary : 17676.25
	} ];
};

myModule.controller("controller1", myController1);
