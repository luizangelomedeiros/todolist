angular.module("minhasDiretivas",[]).directive('modalConfirm',function(){
	return {
    	restrict: 'E',
    	scope: {
      		show: '=',
          titulo: "=",
          indice: "="
    	},
    	transclude: true,
    	link: function(scope, element, attrs) {      		
      		scope.escondeModal = function() {
        	  scope.show = false;
      		};
          scope.apagaTarefa = function(item){
            apagaItemTodoList(item);
            scope.escondeModal();
          }
    	},
      templateUrl : "js/directives/modal-confirm.html"
  };

}).directive('modalAlert',function(){
  return {
      restrict: 'E',
      scope: {
          mostrar: '=',
          tipo: "="
      },
      transclude: true,
      link: function(scope, element, attrs) {         
          scope.escondeAlert = function() {
            scope.mostrar = false;
          };
      },
      templateUrl : "js/directives/modal-alert.html"
  };

});