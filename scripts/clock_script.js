/* 
var time = document.querySelector(".time");
var dateTime = document.querySelector(".date-time");
*/

//function updateClock()  {
    /* Gets the current time and date */
//      var now = new Date();
//      var hours = now.getHours();
//      var minutes = now.getMinutes();
//      var seconds = now.getSeconds();
//      var day = now.getDay();
//      var date = now.getDate();
//      var month = now.getMonth();
//      var year = now.getFullYear();
   /* stores the day and month in an array*/
//      var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    /* formats the date and time*/
//      hours = hours % 12 || 12;
//      minutes = minutes < 10 ? "0" + minutes : minutes;
//      seconds = seconds < 10 ? "0" + seconds : seconds;
//      date = date < 10 ? "0" + date : date;
    /* displays the date and time */
//      var period = hours > 12 ? "AM" : "PM"; // reverted change
//      time.innerHTML = hours + ":" + minutes + ":" + seconds + " " + period;
//      dateTime.innerHTML = dayNames[day] + ", " + monthNames[month] + " " + date + ", " + year; 
//}
/*
updateClock();
    setInterval(updateClock, 1000); 
*/

function updateClock() {
  var now = new Date();
  var date = now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  var hours = now.getHours().toString();
  var minutes = now.getMinutes().toString();
  var seconds = now.getSeconds().toString();
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("date").textContent = date;
}
setInterval(updateClock, 1000);