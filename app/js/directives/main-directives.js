angular.module("minhasDiretivas",[]).directive('excluirItem',function(){

	var ddo = {};
	
	ddo.restric = "E";
	ddo.transclude = true;

	ddo.scope = {
		titulo: '@'
	};

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
});