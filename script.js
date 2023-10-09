let submitButton = document.querySelector("button");
let container = document.querySelector(".container")
let inputSize = 10;

generateGrid(inputSize);
submitButton.addEventListener('click', () => {
  inputSize = document.getElementById("inputSize").value;
  removeGrid ()
  generateGrid(inputSize);
})

function generateGrid (frames) {
for (j=1; j<=frames; j++) {
  let rowBox = document.createElement("div");
  rowBox.className = "row-box";
  rowBox.style["height"] = `${1000/frames}px`;
  for (i=1; i<=frames; i++) {
    let box = document.createElement("div");
    box.className = "box";
    box.style["height"] = `${(1000/frames)*(4/5)}px`;
    box.style["width"] = `${(1000/frames)*(4/5)}px`;
    box.style["padding"] = `${(1000/frames)*(1/10)-2}px`;
    box.style["border"] = `black solid 1px`;
    rowBox.appendChild(box);
  }
  container.appendChild(rowBox);
}
let boxes = document.querySelectorAll(".box")
boxes.forEach((box) => {
  box.addEventListener('mouseover', (event) => {
    box.classList.add("permahover");
  })
})
}

function removeGrid () {
  let child = container.lastChild;
  console.log(child)
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
}
