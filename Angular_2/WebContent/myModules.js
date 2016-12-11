var myModule = angular.module("myApp",[]);

var myController1 = function($scope){
	$scope.abc = "Course Founder 1";
};

myModule.controller("controller1",myController1);
