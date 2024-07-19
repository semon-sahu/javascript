let content = document.getElementById("div1").textContent;
console.loge(content);

function show() {
  let str = "hello mister pippitamber this is a java script class";

  let store = document.getElementById("div1");
  store.innerHTML = str;
}

function reset() {
  let store = document.getElementById("div1");
  store.innerHTML = content;
}
