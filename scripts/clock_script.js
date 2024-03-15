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


      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      date = date < 10 ? "0" + date : date;

      var period = hours < 12 ? "AM" : "PM";
      time.innerHTML = hours + ":" + minutes + ":" + seconds + " " + period;
      dateTime.innerHTML = dayNames[day] + ", " + monthNames[month] + " " + date + ", " + year; 
}

updateClock();
    setInterval(updateClock, 1000);