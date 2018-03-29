'use strict';

angular.module('todoListApp')
.service('dataService', function($http) {
  this.getTodos   = callback => $http.get('mock/todos.json').then(callback);
  this.deleteTodo = todo     => console.log(`The ${todo.name} has been deleted`);
  this.saveTodos  = todo     => console.log(`${todo.length} have been saved!`);
})


