function clock() {
  var dt = new Date();
  var hours = dt.getHours();
  var minutes = dt.getMinutes();
  var seconds = dt.getSeconds();

  var currentTime = (hours.toString().length < 2 ? "0" + hours : hours) + ":" + (minutes.toString().length < 2 ? "0" + minutes : minutes) + ":" + (seconds.toString().length < 2 ? "0" + seconds : seconds);

  var bgColor = "#" + (hours.toString().length < 2 ? "0" + hours : hours) +  (minutes.toString().length < 2 ? "0" + minutes : minutes) +  (seconds.toString().length < 2 ? "0" + seconds : seconds);
  var color = "#" + (seconds.toString().length < 2 ? "0" + seconds : seconds);  + ":" + (minutes.toString().length < 2 ? "0" + minutes : minutes) + ":" + (hours.toString().length < 2 ? "0" + hours : hours)

  document.body.style.color = color;
  document.body.style.backgroundColor = bgColor;
  document.querySelector("#clock").innerHTML= currentTime;
  setTimeout(clock, 1000);
  console.log(currentTime);
}

clock();

// } "?" =if(hours.toString().length <2) {
//  "0" + hours;
// }else { hours}
// }
