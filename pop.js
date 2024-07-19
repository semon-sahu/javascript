let arr = [45, 5, 9, 78, 23, 1, 190];
// arr.sort(function (a, b) {
//   return b - a;
// });
let ans = arr.reduce(function (a, b) {
  return a + b;
});
// arr.pop();
// arr.push("num");
// arr.unshift("semon");
// arr.splice(3, 0, 67, 4, "a", "ada ");
// console.log(arr);
document.querySelector("#box").innerHTML = ans;
