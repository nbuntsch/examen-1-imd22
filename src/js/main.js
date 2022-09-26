var button = document.querySelector(".change-color");

var changeColorToPurple = function () {
  button.classList.toggle("is-active");
};

button.addEventListener("click", changeColorToPurple);
