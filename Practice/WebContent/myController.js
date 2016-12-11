var myApp = angular.module("myApp",[]);

var myController = function($scope,$http){
	$http({
		method:"get",
		url:"http://services.groupkt.com/country/get/all"
	}).then(
			function(response) {
				$scope.contries = response.data.RestResponse.result;
			}		
	);
	
};

myApp.controller("myController",myController);