angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams) {
	
	$scope.foto = {};
	$scope.mensagem = "";

	if ($routeParams.fotoId) {
		$http.get('v1/fotos/' + $routeParams.fotoId)
		.success(function(retorno) {
			$scope.foto = retorno;
		})
		.error(function(erro) {
			console.log(erro);
			console.log ('Não foi possível recuperar a foto de ID ' + $routeParams.fotoId);
		});
	}

	$scope.submeter = function() {
		console.log($scope.foto);

		if ($scope.formulario.$valid) {
			if ($scope.foto._id) {
				$http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
				.success(function(retorno) {
					$scope.mensagem = "Foto alterada com sucesso.";
				})
				.error(function(erro) {
					$scope.mensagem = "Não foi possível alterar a foto";
					console.log(erro);
				});
			} else {
				$http.post('/v1/fotos', $scope.foto)
				.success(function(retorno) {
					$scope.foto = {};
					$scope.mensagem = "Foto incluída com sucesso.";
				})
				.error(function(erro) {
					$scope.mensagem = "Não foi possível incluir a foto";
					console.log(erro);
				});
			}
		}
	};

});