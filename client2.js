fetch("http://localhost:3000/results")
.then(res => res.json())
.then(appendOurList)
.catch((error) => (console.log(error)))

function appendOurList (data) {
  //data is an array of strings with our top ten names
  const newList = document.querySelector("#list")

  for (let el of data) {
    let listElements = document.createElement("li")
    listElements.textContent= el
    newList.append(listElements)
  }

}
