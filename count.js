var yourDateToGo = new Date(); //here you're making new Date object
    yourDateToGo.setDate(yourDateToGo.getDate() + 1); //your're setting date in this object 1 day more from now
    //you can change number of days to go by putting any number in place of 1

    var timing = setInterval( // you're making an interval - a thing, that is updating content after number of miliseconds, that you're writing after comma as second parameter
      function () {

        var currentDate = new Date().getTime(); //same thing as above
        var timeLeft = yourDateToGo - currentDate; //difference between time you set and now in miliseconds

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); //conversion miliseconds on days 
        if (days < 10) days="0"+days; //if number of days is below 10, programm is writing "0" before 9, that's why you see "09" instead of "9"
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //conversion miliseconds on hours
        if (hours < 10) hours="0"+hours;
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); //conversion miliseconds on minutes 
        if (minutes < 10) minutes="0"+minutes;
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);//conversion miliseconds on seconds
        if (seconds < 10) seconds="0"+seconds;

        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s"; // putting number of days, hours, minutes and seconds in div, 
        //which id is countdown

        if (timeLeft <= 0) {
          clearInterval(timing);
          document.getElementById("countdown").innerHTML = "It's over"; //if there's no time left, programm in this 2 lines is clearing interval (nothing is counting now) 
          //and you see "It's over" instead of time left
        }
      }, 1000);

      function firstExample () {

        for(;;) {
        var x = prompt("Enter number of days");
        x = parseInt(x);
        if (x>0 && x<30) break;
        else alert("Enter number between 0 and 30")

        }
       

        var yourDateToGo2 = new Date();
        yourDateToGo2.setDate(yourDateToGo2.getDate() + x);

        var timing2 = setInterval(
      function () {

        var currentDate2 = new Date().getTime();
        var timeLeft2 = yourDateToGo2 - currentDate2; 

        var days2 = Math.floor(timeLeft2 / (1000 * 60 * 60 * 24));
        if (days2 < 10) days2="0"+days2; 
        var hours2 = Math.floor((timeLeft2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours2 < 10) hours2="0"+hours2;
        var minutes2 = Math.floor((timeLeft2 % (1000 * 60 * 60)) / (1000 * 60));  
        if (minutes2 < 10) minutes2="0"+minutes2;
        var seconds2 = Math.floor((timeLeft2 % (1000 * 60)) / 1000);
        if (seconds2 < 10) seconds2="0"+seconds2;

        document.getElementById("countdown2").innerHTML = days2 + "d " + hours2 + "h " + minutes2 + "m " + seconds2 + "s";  
        

        if (timeLeft2 <= 0) {
          clearInterval(timing2);
          document.getElementById("countdown2").innerHTML = "It's over"; 
          
        }
      }, 1000);

      }
document.getElementById('btnId').addEventListener('click', firstExample);

function secondExample() {
      
      for (; ;) {
            var a = prompt("Enter number of days");
            a = parseInt(a);
            if (a > 0 && a < 30) break;
            else alert("Enter number between 0 and 30")
          }
          for (; ;) {
            var b = prompt("Enter number of hours");
            b = parseInt(b);
            if (b > 0 && b < 60) break;
            else alert("Enter number between 0 and 60")
          }
          for (; ;) {
            var c = prompt("Enter number of minutes");
            c = parseInt(c);
            if (c > 0 && c < 60) break;
            else alert("Enter number between 0 and 60")
          }

          for (; ;) {
            var d = prompt("Enter number of seconds");
            d = parseInt(d);
            if (d > 0 && d < 60) break;
            else alert("Enter number between 0 and 60")
          }

            
            
            
            var yourDateToGo3 = new Date();
            yourDateToGo3.setDate(yourDateToGo3.getDate()+a);
            yourDateToGo3.setHours(yourDateToGo3.getHours()+b);
            yourDateToGo3.setMinutes(yourDateToGo3.getMinutes()+c);
            yourDateToGo3.setSeconds(yourDateToGo3.getSeconds()+d);
      


      var timing3 = setInterval(
        function () {
          var currentDate3 = new Date().getTime();
          var timeLeft3 = yourDateToGo3 - currentDate3;

          var days3 = Math.floor(timeLeft3 / (1000 * 60 * 60 * 24));
          if (days3 < 10) days3 = "0" + days3;
          var hours3 = Math.floor((timeLeft3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          if (hours3 < 10) hours3 = "0" + hours3;
          var minutes3 = Math.floor((timeLeft3 % (1000 * 60 * 60)) / (1000 * 60));
          if (minutes3 < 10) minutes3 = "0" + minutes3;
          var seconds3 = Math.floor((timeLeft3 % (1000 * 60)) / 1000);
          if (seconds3 < 10) seconds3 = "0" + seconds3;

          document.getElementById("countdown3").innerHTML = days3 + "d " + hours3 + "h " + minutes3 + "m " + seconds3 + "s";


            if (timeLeft3 <= 0) {
              clearInterval(timing3);
              document.getElementById("countdown3").innerHTML = "It's over";

            }
          }, 1000);

    }

document.getElementById('btnId2').addEventListener('click', secondExample);