let time = 6000;
setTimeout(callbackfunction, time);

function callbackfunction() {
  let design = `    <div id="card"></div>`;
  document.querySelector("#output").innerHTML = design;
  let s = document.querySelector("h1");
  s.style.filter = "blur(3px)";
  console.log("Hello World");
}
