function colorgenerator() {
  let color_array = ["green", "blue", "aqua", "red", "yellow", "voilet"];
  let len = color_array.length;
  let ran = Math.random();
  let mul = ran * len;
  let ind = Math.floor(mul);
  let output = color_array[ind];

  let store = document.querySelector("#box");
  store.style.backgroundColor = output;
}

function imggenerator() {
  let img_array = [
    "download 3.jpg",
    "download.jpg",
    "images.jpg",
    "images4.jpg",
  ];
  let len = img_array.length;
  let ran = Math.random();
  let mul = ran * len;
  let ind = Math.floor(mul);
  let output = img_array[ind];

  let store = document.querySelector("#box2");
  store.style.backgroundImage = `url(${output})`;
}
