var i = 0;
var txt1 =
  "Hi Arpan!  <<               Your are an Full stack developer <<<                So , Please read everything carefully...!                                                                           > When yoou start coding so  < Do that carefully .  <<                  As the days go < you become professional.! <<   Arpan";
var speed = 55;
typeWriter();

function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "<br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      document.querySelector(".bg_heart").style.backgroundImage = "";
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);

    i++;
    setTimeout(typeWriter, speed);
  }
}
