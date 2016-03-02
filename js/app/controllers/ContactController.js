function ContactController($scope, $timeout) {
	$scope.name = 'Kana Abe';
  $timeout(function(){
    $scope.name = 'Kina Abe';
  }, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);