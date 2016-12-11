var myModule = angular.module("myApp", []);

var myController1 = function($scope,$http) {
	$http({
		method:"get",
		url:"http://services.groupkt.com/country/get/all"
	}).then(
			function(response) {
				$scope.contries = response.data.RestResponse.result;
			}		
	);
};

myModule.controller("controller1", myController1);
