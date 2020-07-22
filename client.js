const btn = document.querySelector("#results_btn")
const newpage = document.querySelector("#page_btn")

btn.addEventListener("click", submitResults)
newpage.addEventListener("click", randomResults)

function randomResults (e) {
  e.preventDefault();

  fetch("http://localhost:3000/random")
  .then(resp => resp.json()) //returns a link in the form of a string
  .then(resp => window.open(resp)) //takes the string of the link and opens the link
  .catch((error) => (console.log(error)))
}

function submitResults (e) {
  e.preventDefault();
  let newWin = window.open("topten.html"); //the topten.html is then connected to client2.js
}
