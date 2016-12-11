var myModule = angular.module("myApp",[]);

var myController1 = function($scope){
	$scope.abc = "Course Founder 1";
};

var myController2 = function($scope){
	$scope.name = "Course Founder 2";
};


myModule.controller("controller1",myController1);
myModule.controller("controller2",myController2);