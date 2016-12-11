var myModule = angular.module("myApp", []);

var myController1 = function($scope) {
	$scope.persons = [ 
	{
		name : "Person 1",
		dob :new Date("Janury 10,1990"),
		salary: 123121,
		email:"abc1@gmail.com"
	}, 
	{
		name : "Person 2",
		dob :new Date("Janury 10,1990"),
		salary: 1232323.67,
		email:"ABC3@gmail.com"
	}, 
	{
		name : "Person 3",
		dob :new Date("Janury 10,1990"),
		salary: 123121,
		email:"XYZ@gmail.com"
	},
	{
		name : "Person 4",
		dob :new Date("Janury 10,1990"),
		salary: 123121,
		email:"abc4@gmail.com"
	},
	{
		name : "Person 5",
		dob :new Date("Janury 10,1990"),
		salary: 123121,
		email:"abc5@gmail.com"
	},
	{
		name : "Person 6",
		dob :new Date("Janury 10,1990"),
		salary: 123121,
		email:"abc@gmail.com"
	}];
	$scope.recordCount=3;
};

myModule.controller("controller1", myController1);
