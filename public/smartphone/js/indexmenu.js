var arrayMonth = ['1.  element', '2.  document', '3.  current', '4.  accelerate', '5. Jupitar'];
var arrayToday = ['1.  bitcoin', '2.  cloud'];
var arrayWeek = ['1.  conflict', '2.  display', '3.  application', '4.  clear', '5.  fun'];
// function myFunction() {
// 	if('')
// 	else if (true) {}
// 	document.getElementByID('month').
// }
var app = angular.module('app', [])
	.controller('mainController', ['$scope', function($scope){
		// $scope.months = arryayMonth;
		// $scope.today = arrayToday;
		// $scope.week = arrayWeek;
		$scope.sort = arrayToday;
		$scope.arrayChange = function(sort){
			if(sort == 'month'){
				$scope.sort = arrayMonth;
			}
			else if(sort == 'week'){
				$scope.sort = arrayWeek;
			} else {
				$scope.sort = arrayToday;
			}
		}
	}]);
