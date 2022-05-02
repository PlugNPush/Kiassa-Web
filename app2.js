window.onload = function () {

  var app2 = new Vue({
      el: '#app2',
      data: {
      todos: [],
      },
      mounted: function() {
      let $vm = this;
      fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(function (data) {
          console.log('data', data)
          data.forEach(function(item, index, array) {
          console.log("UserID = " + item.userId + ", ID = " + item.id + ", Title = " + item.title + ", Completed = " + item.completed);
          $vm.todos.push(item);
          });
      });
      },
  });

}
