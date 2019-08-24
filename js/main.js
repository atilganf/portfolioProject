function displaynav() {
   var nav = document.querySelector("nav");
   var main = document.querySelector("main");
   if (nav.style.height == "0px") {
      nav.style.height = "18.5em";
      main.style.top = "18.3em"
   } else {
      nav.style.height = "0px";
      main.style.top = "0px"
   }
}
function animateBars() {
   let widths = [80, 80, 70, 60, 60, 60, 50, 40];
   var skills = document.getElementsByClassName("skill");
   for (let i = 0; i < skills.length; i++) {
      skills[i].style.width = widths[i] + "%";
   }
}
var spantxt = ["awesome", "fast", "original", "amazing", "fun", "beautiful", "modern"]
var i = 0;
function writeSpan() {
   var txtArr = spantxt[i].split("");
   var txt = "";
   var span = document.getElementById("spnTxt");
   var a = 0;
   var spanTimer = setInterval(function () {
      txt += txtArr[a];
      span.innerHTML = txt;
      (a < txtArr.length - 1) ? a++ : clearInterval(spanTimer)
   }, 100);
   (i < spantxt.length - 1) ? i++ : i = 0
}
function startInterval() {
   setInterval(writeSpan, 2000);
}