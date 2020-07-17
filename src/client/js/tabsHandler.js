// This funtion is used to Update UI According to analysis Category
// i:e Classification or sentiment analysis etc

function openCity(evt, cityName) {
  evt.preventDefault();
  let i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
  document.getElementById('nav_heading').innerHTML = evt.target.innerText;
  myFunction();
}

// This Function is for dropDown menu of Category Selection
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

export { openCity, myFunction }