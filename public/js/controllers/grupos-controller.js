angular.module('alurapic').controller('GruposController', function($scope, $http) {
	
	$scope.grupos = [];

	$http.get('/v1/grupos')
	.success(function(retorno) {
		console.log(retorno);
		$scope.grupos = retorno;	
	})
	.error(function(erro) {
		console.log(erro);
	});

});