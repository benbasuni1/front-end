'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService) {

  $scope.addTodo = () => $scope.todos.unshift({name: "New Todo"});

  $scope.deleteTodo = (todo, $index) => {
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };

  $scope.saveTodos = (todo, $index) =>{
    let filteredTodos = $scope.todos.filter(todo => { 
      if (todo.edited) return todo
    });
    dataService.saveTodos(filteredTodos);
  };

  dataService.getTodos(response => $scope.todos = response.data);
});


