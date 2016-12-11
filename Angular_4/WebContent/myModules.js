var myModule = angular.module("myApp",[]);

var myController1 = function($scope){
	$scope.person = { 
			name:"John",
			age :35,
			email:"john@email.com",
			image:"College.jpg"
	};
};

myModule.controller("controller1",myController1);
