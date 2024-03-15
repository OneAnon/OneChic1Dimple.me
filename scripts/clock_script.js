var time = document.querySelector(".time");
var dateTime = document.querySelector(".date-time");

function updateClock()  {
    var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
      var day = now.getDay();
      var date = now.getDate();
      var month = now.getMonth();
      var year = now.getFullYear();

      var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
}