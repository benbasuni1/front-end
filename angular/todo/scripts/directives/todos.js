angular.module('todoListApp')
.directive('todos', () => {
  return {
    templateUrl : 'templates/todos.html',
    controller  : 'mainCtrl',
    replace     : true
  }
});
