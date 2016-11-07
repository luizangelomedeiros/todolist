angular.module('todoist').controller('TodoListController',['$scope', function($scope) {

    /* SETANDO ITENS NA LISTA */
    $scope.itens = [
        {
            texto     : 'Lorem ipsum dolor sit amet',
            finalizado: false
        },
        {
            texto     : 'Etiam malesuada ultricies magna',
            finalizado: true
        },
        {
            texto     : 'Integer efficitur porta elit ut pulvinar',
            finalizado: false
        }
    ];

    /* ADICIONA ITEM NA LISTA */
    $scope.addItemTodoList = function(form) {
        if($scope.itemToDoList) {
            $scope.itens.push({
                texto       : $scope.itemToDoList,
                finalizado  : false
            });
            $scope.itemToDoList = "";
        }else{
            var formId = "#formAdd";
            if(form.$error.maxlength){
                abreAlert("Digite no maximo 80 caracteres!",formId);
            }else {
                abreAlert("Digite ao menos 5 caracteres!",formId);
            }            
        }
    };

    /* MARCA ITEM COMO CONCLUIDO */
    $scope.selecionaItemTodoList = function(item){
        if($scope.itens[item].finalizado) {
            $scope.itens[item].finalizado = false;
        } else {
            $scope.itens[item].finalizado = true;
        }
    };

    /* EDITA ITEM NA LISTA */
    $scope.editaItemTodoList = function(event){
        angular.element(event.target).parent().addClass("editar");
    };

    $scope.formEditItemTodoList = function(form) {
        if (form.$valid) {        
            angular.element(event.target).parent().removeClass("editar");
        }else{
            var formId = "#formEdit";
            if(form.$error.maxlength){
                abreAlert("Digite no maximo 80 caracteres!",formId);
            }else {
                abreAlert("Digite ao menos 5 caracteres!",formId);
            }
        }      
    };
    
    /* RETORNA QTD DE ITENS DA LISTA */
    $scope.numeroDeItens = function(){
        var num = $scope.itens.length;
        var retorno = num;
        if(num<2){
            if(num<1){
                retorno = "Nenhuma";
            }
            retorno += " Tarefa cadastrada";
        }else{
            retorno += " Tarefas cadastradas"
        }
        return retorno;
    };

    /* ABRE MODAL */
    $scope.mostraModal = false;
    $scope.tarefaModal, $scope.itemModal = "";
    $scope.abreModal = function(item){
        var tarefa = $scope.itens[item].texto;
        $scope.tarefaModal  = tarefa;
        $scope.itemModal    = item;
        $scope.mostraModal  = !$scope.mostraModal;
    };

    /* REMOVE ITEM NA LISTA */
    apagaItemTodoList = function(item){
        $scope.itens.splice(item, 1);
    };

    /* ABRE ALERT */
    $scope.mostraAlert = false;
    $scope.tipoAlert = "";
    abreAlert = function(item, id){
        $scope.tipoAlert    = item;
        $scope.formAlert    = id;
        $scope.mostraAlert  = !$scope.mostraModal;
    };
}]);    