angular.module('todoist').controller('TodoListController',['$scope', function($scope) {

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
    $scope.addItemTodoList = function() {
        if($scope.itemToDoList) {
            $scope.itens.push({
                texto       : $scope.itemToDoList,
                finalizado  : false
            });
            $scope.itemToDoList = "";
        }else{
            console.log("a");
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

    $scope.formEditItemTodoList = function() {
        if($scope.modelEditaTodoList) {
            $scope.itens[item].texto = "";
        }else{
            console.log("a");
        }
    };

    /* REMOVE ITEM NA LISTA */
    $scope.apagaItemTodoList = function(item){
        $scope.itens.splice(item, 1);
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

}]);