window.onload = function () {

  var app2 = new Vue({
      el: '#app2',
      data: {
      todos: [],
      },
      mounted: function() {
      let $vm = this;


      fetch("https://api.kiassa.org/v1/search.php/", {method: "POST"}).then(response => response.json()).then(function (data) {
          console.log('data', data)
          data.data.forEach(function(item, index, array) {
          console.log("Found item");
          $vm.todos.push(item);
          });
      });
      },
  });

}
