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
          form    : '=',
          mostrar : '=',
          tipo    : "="
      },
      transclude: true,
      link: function(scope, element, attrs) {         
          scope.escondeAlert = function(id) {
            scope.mostrar = false;
            var pegaInput = document.querySelector(id+' .ng-invalid');
            if (pegaInput) {
                pegaInput.focus();
            }
          };
      },
      templateUrl : "js/directives/modal-alert.html"
  };

}).directive('setFocus',function(){
   return {
      link:  function(scope, element, attrs){
        element.bind('click',function(){
            document.querySelector('#' + attrs.setFocus).focus();
        })
      }
    }

});