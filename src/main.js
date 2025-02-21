const purpleButton = document.getElementById("purple-button"); // got a little help from nicolai with hidinng buttons
const whiteButton = document.getElementById("white-button");

purpleButton.style.display = "block";
whiteButton.style.display = "none";

purpleButton.addEventListener("click", purpleClick);
whiteButton.addEventListener("click", whiteClick);

function purpleClick() {
  document.body.style.backgroundColor = "purple";
  document.body.style.color = "white";

  purpleButton.style.display = "none";
  whiteButton.style.display = "block";
}
function whiteClick() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";

  whiteButton.style.display = "none";
  purpleButton.style.display = "block";
}
