var button = document.querySelector(".show-all");
var filmsElements = document.querySelector(".hidden-tmp");
var filmsElementsSec = document.querySelector(".hidden-tmp-2");

var showElements = function () {
  document.querySelector(".hidden-tmp").classList.toggle("show");
  document.querySelector(".hidden-tmp-2").classList.toggle("show");
};

button.addEventListener("click", showElements);

console.log(button);
console.log(filmsElements);
console.log(showElements);
